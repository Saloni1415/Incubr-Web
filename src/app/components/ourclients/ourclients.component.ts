import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ourclients',
  templateUrl: './ourclients.component.html',
  styleUrls: ['./ourclients.component.scss']
})
export class OurclientsComponent implements OnInit {
  public slides = [
    {
      src: 'https://www.infragistics.com/angular-demos/assets/images/carousel/ignite-ui-angular-indigo-design.png'
    },
    {
      src: 'https://www.infragistics.com/angular-demos/assets/images/carousel/slider-image-chart.png'
    },
    {
      src: 'https://www.infragistics.com/angular-demos/assets/images/carousel/ignite-ui-angular-charts.png'
    }
];
  constructor() { }

  ngOnInit(): void {
  }

}
