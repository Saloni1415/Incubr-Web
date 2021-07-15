import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import Scrollbar from 'smooth-scrollbar';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  headerOpen:boolean=false
  blogslist :any= []
  toggleHeader(){
    this.headerOpen = !this.headerOpen
    if(this.headerOpen){
    Scrollbar.destroyAll();
      document.getElementsByTagName('body')[0].style.overflow='hidden'
    }else{
      //@ts-ignore
      Scrollbar.init(document.querySelector('#my-scrollbar'));
      // document.getElementsByTagName('body')[0].style.overflow='auto'
    }
  }
  constructor(public http:HttpClient) {
    this.getBlogs()
  }
  public async getBlogs(){
    // let id  = this.router.
    this.blogslist =await this.http.get(`http://143.110.180.129/blog/api/blog/`).toPromise();
    return this.blogslist
  }
  public async getBlog(id:any){
    return await this.http.get(`http://143.110.180.129/blog/api/blog/${id}/`).toPromise();
  }

}
