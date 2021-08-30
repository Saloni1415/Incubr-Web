import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {DataService} from '../../data.service';
declare var $:any;
@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.scss']
})
export class Section2Component implements OnInit {
  //@ts-ignore
  @ViewChild('rocketbvideo') rocketbvideo:ElementRef;
  //@ts-ignore
  @ViewChild('rocketbvideo1') rocketbvideo1:ElementRef;

  constructor(public data:DataService) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    try{
      this.rocketbvideo.nativeElement.muted = true 
      this.rocketbvideo.nativeElement.play()
    }catch(e){
    }
    try{
      this.rocketbvideo1.nativeElement.muted = true 
      this.rocketbvideo1.nativeElement.play()
    }catch(e){
    }

    //@ts-ignore
    var parallaxController = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

    $('.parallax').each(function() {
      //@ts-ignore
      var trig = this.parentNode,
      //@ts-ignore
          parallax = this.getAttribute('data-parallax'),
          speed = parallax * 100 + '%';
    //@ts-ignore
      new ScrollMagic.Scene({triggerElement: trig})
          //@ts-ignore
          .setTween(this, {x: speed, ease: Linear.easeNone})
          .addTo(parallaxController);
    })
  }

}
