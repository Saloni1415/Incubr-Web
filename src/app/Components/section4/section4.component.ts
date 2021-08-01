import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.scss']
})
export class Section4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  ngAfterViewInit(){
    let observer = new IntersectionObserver((e:any)=>{
      if(e[0].isIntersecting && !e[0].target.className.includes('overlaymoveanim')){
        e[0].target.className = e[0].target.className+' overlaymoveanim' 
      }
      // else{
      //   e[0].target.className = e[0].target.className.replace('overlaymoveanim','')
      // }
    });
    let target:any = document.getElementsByClassName('portfolioFrame');
    for (let i =0 ;i<target.length;i++){
      observer.observe(target[i]);      
    }
  }
}
