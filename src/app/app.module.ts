// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';

// Pipes
import { TranslatePipe } from './pipes/translate.pipe';

// Services
import { TranslateService } from './services/translate.service';
import { ConfigService } from './services/config.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostsComponent } from './components/dashboard/posts/posts.component';
import { CategoriesComponent } from './components/dashboard/categories/categories.component';
import { ResumeComponent } from './components/dashboard/resume/resume.component';
import { WidgetComponent } from './components/dashboard/widget/widget.component';
import { WidgetStadisticsComponent } from './components/dashboard/widget/widget-stadistics/widget-stadistics.component';

// Factorys
export function translateFactory(provider: TranslateService) {
  return () => provider.getData();
}

export function configFactory(provider: ConfigService) {
  return () => provider.getData();
}

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
    WidgetStadisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
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
