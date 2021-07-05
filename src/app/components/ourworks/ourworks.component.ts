import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-ourworks',
  templateUrl: './ourworks.component.html',
  styleUrls: ['./ourworks.component.scss']
})
export class OurworksComponent implements OnInit {

  constructor(public data:DataService) { }

  async ngOnInit(){
  }

}
