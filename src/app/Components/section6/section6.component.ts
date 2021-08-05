import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section6',
  templateUrl: './section6.component.html',
  styleUrls: ['./section6.component.scss']
})
export class Section6Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    let options = {
      root: document.querySelector('#social '),
      rootMargin: '0px',
      threshold: 1
    }
    let observer = new IntersectionObserver((e:any)=>{
      if(e[0].isIntersecting){
        document.getElementById('whatsapp')?.setAttribute('src','../../../assets/incubrassets/wp.png')
        document.getElementById('insta')?.setAttribute('src','../../../assets/incubrassets/insta.png')
        document.getElementById('linkedin')?.setAttribute('src','../../../assets/incubrassets/linked.png')
      }else{
        document.getElementById('whatsapp')?.setAttribute('src','../../../assets/inc/logos/logoo2.png')
        document.getElementById('insta')?.setAttribute('src','../../../assets/inc/logos/logoo1.png')
        document.getElementById('linkedin')?.setAttribute('src','../../../assets/inc/logos/logoo.png')
      }
    });
    let target:any = document.querySelector('#redframe');
    observer.observe(target);
  }

}
