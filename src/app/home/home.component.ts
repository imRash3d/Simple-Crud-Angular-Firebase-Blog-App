import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Blog } from '../blog.model';
import {  getSummary } from '../functions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
posts :Blog  []=[];
  constructor(private service:BlogService) { }

  ngOnInit() {
    this.getPost();
  }

getPost(){
  this.posts =[];
  this.service.getPost().subscribe(res=>{
    for(let key in res){
      let obj:Blog = {
        title:res[key].title,
        posted_by:res[key].posted_by,
        date:res[key].date,
        image:res[key].image,
        description:res[key].description,
        $key:key
      }
   this.posts.push(obj)
     
    }

    console.log(this.posts)
  })
}
  deletePost(key){
    
    this.service.deletePost(key).subscribe(res=>{
      this.getPost();
    })
  }

  getDescription(description:string){
   if(description){
    return  getSummary(description); 
   }
    
  
  }
}
