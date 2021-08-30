import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.scss']
})
export class Section3Component implements OnInit {
  testimonials = [
    {text:'The team is dedicated to ensuring a top tier experience, that all our needs are met. We’re very grateful to be working with Team Incubr!',client:'Alicia Lahey'},
    {text:'The team is dedicated to ensuring a top tier experience, that all our needs are met. We’re very grateful to be working with Team Incubr!',client:'Alicia Lahey'},
    {text:'The team is dedicated to ensuring a top tier experience, that all our needs are met. We’re very grateful to be working with Team Incubr!',client:'Alicia Lahey'},
    {text:'The team is dedicated to ensuring a top tier experience, that all our needs are met. We’re very grateful to be working with Team Incubr!',client:'Alicia Lahey'},
  ]

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

  constructor(public data:DataService) { }

  ngOnInit(): void { }
  

}
