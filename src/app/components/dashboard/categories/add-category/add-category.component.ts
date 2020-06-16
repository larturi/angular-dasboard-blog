import { Component, OnInit, ViewChild } from '@angular/core';
import { ICategory } from '../../../../interfaces/icategory';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  public category: ICategory;

  @ViewChild('modal_add_category', {static: false}) modal_add_category;

  constructor() {
    this.category = {
      id: '',
      name: '',
      description: ''
    };
  }

  ngOnInit(): void {
  }

  addCategory() {

  }

}
