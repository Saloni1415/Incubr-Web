import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.scss']
})
export class Section3Component implements OnInit {
  testimonials = [
    {text:'The team is dedicated to ensuring a top tier experience, that all our needs are met. We’re very grateful to be working with Team Incubr!',client:'Alicia Lahey'},
    {text:'Gopal and I have worked for over 7 years. If there is one characteristic that stands above them all is this trust we established. Gopal would give us direct feedback, complete a task we asked diligently, and represent the values and purpose of Amy’s on every interaction he had on our behalf.',client:'Paul Scheifer'},
    {text:'Gopal‘s resilience and persistence have led to results beyond expectations and I am proud of what he has achieved.',client:'Damien Threadgold'},
    {text:'His sense of problem-solving and willingness to go the extra mile always helps in creating more values for a client.',client:'Judhajit Bal'},
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

  constructor() { }

  ngOnInit(): void { }
  

}
