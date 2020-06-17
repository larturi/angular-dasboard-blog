import { Component, OnInit, ViewChild } from '@angular/core';
import { ICategory } from '../../../../interfaces/icategory';
import { CategoryService } from '../../../../services/category.service';
import { Category } from 'src/app/models/category';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  public category: ICategory;

  @ViewChild('modal_add_category', {static: false}) modal_add_category;

  constructor(
    private categoryService: CategoryService,
    private modalService: NgbModal,
    private router: Router
  ) {
    this.category = {
      id: '',
      name: '',
      description: ''
    };
  }

  ngOnInit(): void {
  }

  addCategory() {
    const category = new Category(this.category);
    this.categoryService.addCategory(category);
    this.modalService.open(this.modal_add_category);
    this.router.navigate(['/categories']);
  }

}
