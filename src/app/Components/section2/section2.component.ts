import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.scss']
})
export class Section2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
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
