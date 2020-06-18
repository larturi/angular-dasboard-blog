import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/post.service';
import { CategoryService } from '../../../services/category.service';
import { IPost } from '../../../interfaces/ipost';

import * as _ from 'lodash';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public showPosts: boolean = false;
  public posts: IPost[] = [];

  constructor(
    private postService: PostService,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts => {
      this.categoryService.getCategories().subscribe(categories => {

        _.forEach(posts, p => {
          _.forEach(p.categories, (cPost, index) => {
             const categoryFound = _.find(categories, c => c.id === cPost);

             if (categoryFound) {
              p.categories[index] = categoryFound;
             }

          });
        });

        this.posts = posts;
        this.showPosts = true;

      }, error => {
        console.error(error);
        this.showPosts = true;
      });
    }, error => {
      console.error(error);
      this.showPosts = true;
    });
  }

}
