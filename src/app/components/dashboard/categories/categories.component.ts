import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../../../services/translate.service';
import { CategoryService } from '../../../services/category.service';
import { ICategory } from '../../../interfaces/icategory';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public cols: any[];
  public categories: ICategory[] = [];
  public showCategories: boolean = false;
  public selectCategories: string[] = [];
  public searchWord: string;

  constructor(
    private translateService: TranslateService,
    private categoryService: CategoryService
  ) {
    this.cols = [
      { header: '' },
      { header: this.translateService.getTranslate('label.name.category') },
      { header: this.translateService.getTranslate('label.description.category') },
    ];
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(listCategories => {
      this.categories = listCategories;
      this.showCategories = true;
    }, error => {
      console.log(error);
      this.showCategories = true;
    });
  }

  deleteCategories() {
    this.categoryService.deleteCategories(this.selectCategories);
    this.selectCategories = [];
  }

  updateWord(value: string) {
    this.searchWord = value;
  }

}
