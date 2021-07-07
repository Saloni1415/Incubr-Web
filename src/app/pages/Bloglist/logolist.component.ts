import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service'
@Component({
  selector: 'app-logolist',
  templateUrl: './logolist.component.html',
  styleUrls: ['./logolist.component.scss']
})
export class LogolistComponent implements OnInit {
  logslist :any= []
  constructor(public data:DataService) { }

  async ngOnInit() {
    this.logslist = await this.data.getBlogs()
  }

}
