import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.scss']
})
export class Section3Component implements OnInit {
  slideConfig = {
    "slidesToShow": 1, 
    "slidesToScroll": 1,
    'arrows':false,
    "dots": true,
    "infinite": false
  };
  slickInit(e:any) {
    console.log('slick initialized');
  }
  breakpoint(e:any) {
    console.log('breakpoint');
  }
  afterChange(e:any) {
    console.log('afterChange');
  }
  beforeChange(e:any) {
    console.log('beforeChange');
  }  

  constructor() { }

  ngOnInit(): void { }
  

}
