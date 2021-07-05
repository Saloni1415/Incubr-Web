import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  blogslist :any= []
  constructor(public http:HttpClient) {
    this.getBlogs()
  }
  public async getBlogs(){
    this.blogslist =await this.http.get(`http://143.110.180.129/blog/api/blog/`).toPromise();
    console.log(this.blogslist)
  }
}
