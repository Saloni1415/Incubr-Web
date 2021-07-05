import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-wwd',
  templateUrl: './wwd.component.html',
  styleUrls: ['./wwd.component.scss']
})
export class WwdComponent implements OnInit {
  //@ts-ignore
  @ViewChild('wwdsection') wwd:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  cardout(){
    this.wwd.nativeElement.style.backgroundImage = 'none'
  }

  cardin(){
    this.wwd.nativeElement.style.backgroundSize = 'cover'
    this.wwd.nativeElement.style.backgroundPosition = 'center'
    this.wwd.nativeElement.style.backgroundRepeat = 'no-repeat'
    this.wwd.nativeElement.style.backgroundImage = 'url(https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg)'
  }

}
