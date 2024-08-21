import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './book-card/book-card.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { UserCardComponent } from './user-card/user-card.component';


@NgModule({
  declarations: [
    BookCardComponent,
    BlogCardComponent,
    UserCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BlogCardComponent,
    BookCardComponent,
    UserCardComponent
  ]
})
export class MybplibraryModule { }

