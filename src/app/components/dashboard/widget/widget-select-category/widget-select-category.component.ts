import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ICategory } from '../../../../interfaces/icategory';
import { CategoryService } from '../../../../services/category.service';

@Component({
  selector: 'app-widget-select-category',
  templateUrl: './widget-select-category.component.html',
  styleUrls: ['./widget-select-category.component.css']
})
export class WidgetSelectCategoryComponent implements OnInit {

  // tslint:disable-next-line: no-output-native
  @Output() select: EventEmitter<string[]> = new EventEmitter<string[]>();

  public categories: ICategory[] = [];
  public selectedCategories: string[] = [];

  constructor(
    private categoryService: CategoryService
  ) {
    this.select = new EventEmitter<string[]>();
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(listCategories => {
      this.categories = listCategories;
    });
  }

  sendCategories() {
     this.select.emit(this.selectedCategories);
  }

}
