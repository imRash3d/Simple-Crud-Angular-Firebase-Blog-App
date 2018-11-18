import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
url = 'https://angularinfinityscroll.firebaseio.com/blog';
  constructor(private http:HttpClient) { }

  addPost(data){
   return this.http.post(this.url+'.json',data);
  }

  getPost(){
     return this.http.get(this.url+'.json');
  }

  deletePost(key){
   return this.http.delete(this.url+'/'+key+'.json');
  }

  getSinglePost(id){
     return this.http.get(this.url+'/'+id+'.json');
  }
  updatePost(id,data){
    return this.http.put(this.url+'/'+id+'.json',data);
  }
}
