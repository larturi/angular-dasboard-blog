import { Component, OnInit, ViewChild } from '@angular/core';
import { Post } from '../../../../models/post';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { PostService } from '../../../../services/post.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  @ViewChild('modal_add_post', {static: false}) modal_add_post;
  public post: Post;
  public config: AngularEditorConfig;

  constructor(
    private postService: PostService,
    private modalService: NgbModal,
    private router: Router
  ) {
    this.post = new Post({});

    this.config = {
      editable: true,
      height: '22rem',
      minHeight: '5rem'
    };

  }

  ngOnInit(): void {
  }

  addPost() {
    this.postService.addPost(this.post);
    this.modalService.open(this.modal_add_post);
    this.router.navigate(['/posts']);
  }

  getCategories($event) {
    this.post.categories = $event;
  }

  getPath($event) {
    this.post.img = $event;
  }

}
