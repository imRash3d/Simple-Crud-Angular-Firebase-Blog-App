import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { AddPostComponent } from './add-post/add-post.component';
import { HeaderComponent } from './header/header.component';
const routes:Routes = [
  {path:'',component:HomeComponent},
  {path:'post/:id',component:BlogDetailsComponent},
  {path:'add-post',component:AddPostComponent},
  {path:'post/:id/edit',component:AddPostComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogDetailsComponent,
    AddPostComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
