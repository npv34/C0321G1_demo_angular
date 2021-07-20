import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BlogListComponent} from "../../components/blogs/blog-list/blog-list.component";
import {BlogAddComponent} from "../../components/blogs/blog-add/blog-add.component";
import { BlogEditComponent } from '../../components/blogs/blog-edit/blog-edit.component';
import { BlogDetailComponent } from '../../components/blogs/blog-detail/blog-detail.component';
import {RouterModule, Routes} from "@angular/router";

const routers: Routes  = [
  {
    path: '',
    component: BlogListComponent
  },
  {
    path: ':id/detail',
    component: BlogDetailComponent
  },
  {
    path: ':id/edit',
    component: BlogEditComponent
  }
]

@NgModule({
  declarations: [
    BlogListComponent,
    BlogAddComponent,
    BlogEditComponent,
    BlogDetailComponent,
  ],
  exports: [
    BlogListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routers)
  ]
})
export class BlogModule { }
