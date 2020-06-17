import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Category } from '../models/category';
import { Observable } from 'rxjs';
import { ICategory } from '../interfaces/icategory';

import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private afdb: AngularFireDatabase
  ) { }

  addCategory(category: Category) {

    const categoryRef = this.afdb.database.ref('categories');

    const newCategory = categoryRef.push();

    category.id = newCategory.key;

    const categoryRefId = this.afdb.database.ref('categories/' + category.id);

    categoryRefId.set(category.getData());
  }

  getCategories(): Observable<ICategory[]> {
    return this.afdb.list<ICategory>('categories').valueChanges();
  }

  deleteCategories(ids: string[]) {
      _.forEach(ids, id => {
        this.afdb.object('/categories/' + id).remove();
      });
  }

}
