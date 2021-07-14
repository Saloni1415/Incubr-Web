import { Component, OnInit } from '@angular/core';
import Scrollbar from 'smooth-scrollbar';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'incubr';
  ngOnInit(){

  }
  ngAfterViewInit(){
    //FOR SCROLL BAR
    //@ts-ignore
    Scrollbar.init(document.querySelector('#my-scrollbar'));
    // Scrollbar

    $(document).on('mousemove', function(e:any){
        $('#cursor').css({
          left:  e.pageX,
          top:   e.pageY
        });
    });
  
    $(window).on('scroll', function(e:any){
      console.log('scrolled')
        $('#cursor').css({
          left:  e.pageX,
          top:   e.pageY
        });
    });
    //FOR CURSOR
    // const cursor = document.querySelector('.cursor');
    // document.addEventListener('mousemove', e => {
    //   //@ts-ignore
    //     cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
    // })
    // document.addEventListener('click', () => {
    //   //@ts-ignore
    //     cursor.classList.add("expand");
    //     setTimeout(() => {
    //   //@ts-ignore
    //         cursor.classList.remove("expand");
    //     }, 500)
    // })
  }
}
