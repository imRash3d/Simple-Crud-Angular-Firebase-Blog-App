import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import { Blog } from '../blog.model';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
post:Blog = new Blog();
  constructor(
    private service:BlogService,
    private route:ActivatedRoute) {
    this.route.params.subscribe(res=>{
      this.getPost(res.id)
    })
   }

  ngOnInit() {
  }
getPost(id){
  this.service.getSinglePost(id).subscribe(res=>{
 this.post = res as Blog;
  })
}
}
