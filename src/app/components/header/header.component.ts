import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service'
declare var $:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  header = [{name:'about',url:'/'},{name:'our work',url:'/our-work'},{name:'blogs',url:'/blog'},{name:'contact',url:'/'}]
  constructor(public data:DataService) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    $('.nav-toggle').on('click', function (e:any) {
      e.preventDefault();
      //@ts-ignore
      $(this).toggleClass('nav-toggle--active');
    });
  }

  toggleNavIcon(){
    $('.nav-toggle').toggleClass('nav-toggle--active')
  }

}
