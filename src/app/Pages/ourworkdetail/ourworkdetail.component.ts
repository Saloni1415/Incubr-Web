import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-ourworkdetail',
  templateUrl: './ourworkdetail.component.html',
  styleUrls: ['./ourworkdetail.component.scss']
})
export class OurworkdetailComponent implements OnInit {


  logslist :any= []
  constructor(public data:DataService) { }

  async ngOnInit() {
    this.logslist = await this.data.getBlogs()
  }

}
