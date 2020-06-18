import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AngularFireStorage} from '@angular/fire/storage';

@Component({
  selector: 'app-widget-updload-thumbnail',
  templateUrl: './widget-updload-thumbnail.component.html',
  styleUrls: ['./widget-updload-thumbnail.component.css']
})
export class WidgetUpdloadThumbnailComponent implements OnInit {

  @Output() sendPath: EventEmitter<string>;

  public img: any;
  public loadImg: boolean = true;

  constructor(
    public afs: AngularFireStorage
  ) {
    this.sendPath = new EventEmitter<string>();
  }

  ngOnInit(): void {
  }

  uploadFile($event) {

     this.loadImg = false;

     const id = new Date().getTime().toString();
     const file = $event.target.files[0];
     const path = 'thumbnails/' + id;
     const ref = this.afs.ref(path);

     let self = this;

     this.afs.upload(path, file).then( ()=> {
       ref.getDownloadURL().subscribe(url => {
          self.img = url;
          self.sendPath.emit(url);
          this.loadImg = true;
       }, error => {
         console.error(error);
       });
     }, error => {
       console.error(error);
     });

  }

}
