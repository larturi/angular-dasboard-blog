import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

import { IPost } from '../interfaces/ipost';
import { Post } from '../models/post';

import * as moment from 'moment';
import * as _ from 'lodash';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private afdb: AngularFireDatabase
  ) { }

  getPosts(): Observable<IPost[]> {
    return this.afdb.list<IPost>('posts').valueChanges()
  }

  addPost(post: Post) {

      post.date = moment().toISOString();
      const postRef = this.afdb.database.ref('posts');

      const newPost = postRef.push();

      post.id = newPost.key;

      const postRefId = this.afdb.database.ref('posts/' + post.id);
      postRefId.set(post.getData());

  }

  deletePosts(ids: string[]) {
    _.forEach(ids, id => {
      this.afdb.object('posts/' + id).remove();
    });
  }

}
