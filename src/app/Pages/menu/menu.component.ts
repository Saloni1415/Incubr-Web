import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public data:DataService) { }
  items = ['home','startups','corporations','incubr diary','about','our impact']
  ngOnInit(): void {
  }

}
