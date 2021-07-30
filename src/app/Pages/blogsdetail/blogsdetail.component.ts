import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router ,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-blogsdetail',
  templateUrl: './blogsdetail.component.html',
  styleUrls: ['./blogsdetail.component.scss']
})
export class BlogsdetailComponent implements OnInit {

  blogdetail :any= []
  blogslist:any=[]
  constructor(public data:DataService,public route:ActivatedRoute) { 
    this.route.paramMap.subscribe((params:any) => {
      this.getdetail()
    });
  }

  async ngOnInit() {
  }

  async getdetail(){
    let id = this.route.snapshot.paramMap.get('id')
    this.blogdetail = await this.data.getBlog(id)
    let list = await this.data.getBlogs()
    this.blogslist = list.filter((d:any)=>d.id!==id)
    this.blogslist.length = 2
  }

}
