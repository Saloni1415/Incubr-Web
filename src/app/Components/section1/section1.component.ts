import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';

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
  }
}
