import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service'
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  constructor(public data:DataService) {
  }
  blogslist_3:any = []
  async ngOnInit() {
    this.blogslist_3 =await this.data.getBlogs()
    this.blogslist_3.length = 3
  }

}
