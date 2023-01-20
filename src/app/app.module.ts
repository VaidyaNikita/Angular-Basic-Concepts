import { SetBackGround } from './setBackground.directive';
import { Container } from './container/container.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { NotificationComponent } from './notification/notification.component';
import { SearchComponent } from './search/search.component';
import { DemoComponent } from './demo/demo.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CourseComponent } from './course/course.component';
import { FilterComponent } from './filter/filter.component';
import { SearchCourceComponent } from './search-cource/search-cource.component';
import { FormsModule } from '@angular/forms';
import { ViewChildComponent } from './view-child/view-child.component';
import { DemoChildComponent } from './demo-child/demo-child.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { ContentComponent } from './content/content.component';
import { HighlightDirective } from './highlight.directive';
import { VideosComponent } from './videos/videos.component';

@NgModule({
  declarations: [
    AppComponent,
    Container,
    NavComponent,
    HeaderComponent,
    NotificationComponent,
    SearchComponent,
    DemoComponent,
    CustomerListComponent,
    ParentComponent,
    ChildComponent,
    CourseComponent,
    FilterComponent,
    SearchCourceComponent,
    ViewChildComponent,
    DemoChildComponent,
    ContentProjectionComponent,
    ContentComponent,
    SetBackGround,
    HighlightDirective,
    VideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
