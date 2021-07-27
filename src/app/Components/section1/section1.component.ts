import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss']
})
export class Section1Component implements OnInit {
  //@ts-ignore
  @ViewChild('Topvideo') Topvideo:ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    this.Topvideo.nativeElement.muted = true 
    this.Topvideo.nativeElement.play()

    //SPOTLIGHT
    var elem = document.getElementById('spotlight'),canTouch = !!('ontouchstart' in window);
    if(canTouch){
      var redrect = document.getElementsByClassName('redrect')[0]
      redrect.addEventListener('touchmove', this.onTouchStart, false);
      redrect.addEventListener('touchstart', this.onTouchStart, false);
    }else{
      var redrect = document.getElementsByClassName('redrect')[0]
      redrect.addEventListener('mousemove', this.onMoseMove, false);
    }

    //DRAGGABLE
    // let target:any = document.getElementById('draggable-div')
    // target.addEventListener('mousedown',this.onGrab)

  }

  //SPOTLIGHT
  onTouchStart(e:any){
    var elem:any = document.getElementById('spotlight'),canTouch = !!('ontouchstart' in window);
    var target = e.targetTouches[0];
    elem.style.backgroundImage  = '-webkit-radial-gradient(' + target.offsetX + 'px ' + target.offsetY + 'px, circle cover, #f27b9b, #f27b9b';
  }
  
  onMoseMove(e:any) {
      var elem:any = document.getElementById('spotlight')
      elem.style.backgroundImage  = '-webkit-radial-gradient(' + e.offsetX + 'px ' + e.offsetY + 'px, circle cover, rgba(0,0,0,0.2) 15%, red 25%)';
  }



  //DRAGGABLE
  onDrag(e:any) {
    console.log(e)
    let target:any = document.getElementById('draggable-div')
    let originalStyles = window.getComputedStyle(target)
    // target.style.left = parseInt(originalStyles.left) + e.movementX + 'px'
    window.scroll({
    //@ts-ignore
      top: `${parseInt(originalStyles.top) + e.movementY+100} px`,
      left: 0,
      // behavior: 'smooth'
    });
    target.style.top = parseInt(originalStyles.top) + e.movementY + 'px'
  }
  
  onLetGo() {
    console.log('letgo')
    document.removeEventListener('mousemove', this.onDrag)
    document.removeEventListener('mouseup', this.onLetGo)
  }
  
  onGrab() {
    console.log('grab')
    let target:any = document.getElementById('draggable-div')
    // document.onmousemove = this.onDrag
    // document.onmouseup = this.onLetGo
    document.addEventListener('mousemove', this.onDrag)
    document.addEventListener('mouseup', this.onLetGo)
  }
  

}
