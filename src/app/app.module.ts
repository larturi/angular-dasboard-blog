// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ChartModule } from 'primeng/chart';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { AngularEditorModule } from '@kolkov/angular-editor';

// Components
import { AppComponent } from './app.component';
import { AddPostComponent } from './components/dashboard/posts/add-post/add-post.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostsComponent } from './components/dashboard/posts/posts.component';
import { CategoriesComponent } from './components/dashboard/categories/categories.component';
import { ResumeComponent } from './components/dashboard/resume/resume.component';
import { WidgetComponent } from './components/dashboard/widget/widget.component';
import { WidgetStadisticsComponent } from './components/dashboard/widget/widget-stadistics/widget-stadistics.component';
import { WidgetLastCommentsComponent } from './components/dashboard/widget/widget-last-comments/widget-last-comments.component';
import { WidgetLastVisitsComponent } from './components/dashboard/widget/widget-last-visits/widget-last-visits.component';
import { AddCategoryComponent } from './components/dashboard/categories/add-category/add-category.component';

// Pipes
import { TranslatePipe } from './pipes/translate.pipe';

// Services
import { TranslateService } from './services/translate.service';
import { ConfigService } from './services/config.service';

// Directives
import { HighlightDirective } from './directives/highlight.directive';
import { WidgetSelectCategoryComponent } from './components/dashboard/widget/widget-select-category/widget-select-category.component';

// Factorys
export function translateFactory(provider: TranslateService) {
  return () => provider.getData();
}

export function configFactory(provider: ConfigService) {
  return () => provider.getData();
}

// Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyARWIPdDM4EyZ85uvfSraX6fvcfIrae0dQ',
  authDomain: 'ddr-blog-2583f.firebaseapp.com',
  databaseURL: 'https://ddr-blog-2583f.firebaseio.com',
  projectId: 'ddr-blog-2583f',
  storageBucket: 'ddr-blog-2583f.appspot.com',
  messagingSenderId: '817380412680',
  appId: '1:817380412680:web:d5ff5dc31ae06f7754b0bd'
};

@NgModule({
  declarations: [
    AppComponent,
    TranslatePipe,
    SidebarComponent,
    DashboardComponent,
    PostsComponent,
    CategoriesComponent,
    ResumeComponent,
    WidgetComponent,
    WidgetStadisticsComponent,
    WidgetLastCommentsComponent,
    WidgetLastVisitsComponent,
    AddCategoryComponent,
    HighlightDirective,
    AddPostComponent,
    WidgetSelectCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    ChartModule,
    FormsModule,
    NgbModule,
    TableModule,
    CheckboxModule,
    AngularEditorModule
  ],
  providers: [
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: translateFactory,
      deps: [TranslateService],
      multi: true
    },
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      deps: [ConfigService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
