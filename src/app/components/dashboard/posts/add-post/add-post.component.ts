import { Component, OnInit, ViewChild } from '@angular/core';
import { Post } from '../../../../models/post';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  @ViewChild('modal_add_post', {static: false}) modal_add_post;
  public post: Post;
  public config: AngularEditorConfig;

  constructor() {
    this.post = new Post({});

    this.config = {
      editable: true,
      height: '22rem',
      minHeight: '5rem'
    }
  }

  ngOnInit(): void {
  }

  addPost() {

  }

  getCategories($event) {
    this.post.categories = $event;
  }

}
