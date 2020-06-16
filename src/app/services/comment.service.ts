import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { IComment } from '../interfaces/icomment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private afdb: AngularFireDatabase
  ) { }

  getComments(): Observable<IComment[]> {
    return this.afdb.list<IComment>('/comments').valueChanges();
  }

  getLastComments(): Observable<IComment[]> {
    return this.afdb.list<IComment>('/comments', ref =>
      ref.orderByChild('date').limitToFirst(5)
    ).valueChanges();
  }

}
