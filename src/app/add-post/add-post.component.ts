import { Component, OnInit } from '@angular/core';
import {NgForm, } from '@angular/forms';
import { BlogService } from '../blog.service';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../blog.model';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
editMode:boolean;
post_id;
post:Blog = new Blog();
  constructor(
    private  route:ActivatedRoute,
    private service:BlogService) {
      this.route.params.subscribe(res=>{
      if(res.id){
        this.post_id = res.id;
        this.editMode = true;
        this.editSinglePost();
      }
       console.log(this.editMode)
      })
     }

  ngOnInit() {
  }

  editSinglePost(){
    this.service.getSinglePost(this.post_id).subscribe(res=>{
      this.post = res as Blog;
    })
  }

  submitForm(formData:NgForm){
    if(this.editMode){
      this.service.updatePost(this.post_id,formData).subscribe(res=>{
        console.log( res)
       })
    }else {
      formData['date']= new Date();
      // console.log(formData)
      this.service.addPost(formData).subscribe(res=>{
       console.log( res)
      })
    }
 

  }

}
