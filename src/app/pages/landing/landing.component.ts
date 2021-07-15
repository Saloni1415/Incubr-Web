import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  instance:any ;
  //@ts-ignore
  @ViewChild('Topvideo') Topvideo:ElementRef;
  //@ts-ignore
  @ViewChild('Footervideo') Footervideo:ElementRef;
  constructor() { }

  async ngOnInit() {
    //FOR WRITING ANIMATION

    // let Fontsize = 97
    // let Strokewidth = "2px"
    // if(window.innerWidth<600){
    //   Fontsize = 45
    //   Strokewidth = '1px'
    // }
    // this.instance = new SVGTextAnimate("../../../assets/fonts/AuthenticSignature.ttf",{
    //   "duration": 300,
    //   "delay": 150,
    //   "direction": "alternate",
    //   "timing-function": "linear",
    //   "fill-mode": "forwards",
    //   "mode": "delay"
    // },{
    //   "stroke": "#020025",
    //   "stroke-width": Strokewidth,
    //   "font-size": Fontsize
    // });
    // await this.instance.setFont();
    // this.instance.create(" grow fast with us", "#demo");
    // setTimeout(()=>{
    //   let g:any = document.getElementById('demo')?.children[0]?.children[0]
    //   let svg:any = document.getElementById('demo')?.children[0]
    //   svg.style.transition = '3s'
    //   g.style.transition = '3s'
    //   g.style.fill = '#020025'
    // },3000)


  }

  ngAfterViewInit(){
    this.Topvideo.nativeElement.muted = true 
    this.Topvideo.nativeElement.play()
    this.Footervideo.nativeElement.muted = true 
    this.Footervideo.nativeElement.play()
  }
}
