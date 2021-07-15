import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service'

@Component({
  selector: 'app-ourworksdetail',
  templateUrl: './ourworksdetail.component.html',
  styleUrls: ['./ourworksdetail.component.scss']
})
export class OurworksdetailComponent implements OnInit {

  logslist :any= []
  constructor(public data:DataService) { }

  async ngOnInit() {
    this.logslist = await this.data.getBlogs()
  }

}
