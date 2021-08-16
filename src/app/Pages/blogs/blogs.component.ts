import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  logslist :any= []
  constructor(public data:DataService) { }

  async ngOnInit() {
    this.logslist = await this.data.getBlogs()
  }

  limitWords(str:any, max:any, suffix:any) {
    let strArr = str.split(" ")
    strArr.length = max
    return strArr.join(" ")
  }
}
