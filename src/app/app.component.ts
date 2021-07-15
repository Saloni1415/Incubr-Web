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

    //FOR MOBILE VIEW

    // if(window.innerWidth < 600){
    //   //@ts-ignore
    //   document.getElementById('viewport').setAttribute("content", "width=1024")
    //   //@ts-ignore
    //   setTimeout(()=>{
    //     var Contelements:any = document.getElementsByClassName('vertical_container')
    //     for (var i=0 ; i<Contelements.length;i++) {
    //       Contelements[i].style.marginLeft = '10px'
    //       Contelements[i].style.marginRight = '10px'
    //     }
    //   },10)
    // }
    // $(window).resize(function(e:any){
    //   //@ts-ignore
    //   document.getElementById('viewport').setAttribute("content", "width=1024")
    //   //@ts-ignore
    //   setTimeout(()=>{
    //     var Contelements:any = document.getElementsByClassName('vertical_container')
    //     for (var i=0 ; i<Contelements.length;i++) {
    //       Contelements[i].style.marginLeft = '10px'
    //       Contelements[i].style.marginRight = '10px'
    //     }
    //   },10)
    // });


    //FOR SCROLL BAR
    $(document).ready(function(){
    //@ts-ignore'
      $(this).scrollTop(1,0);
    //@ts-ignore'
      $(this).scrollTop(0,0);
    //@ts-ignore'
        Scrollbar.init(document.querySelector('#my-scrollbar'),{renderByPixels:true});
    });
    // Scrollbar

    // $(document).on('mousemove', function(e:any){
    //     $('#cursor').css({
    //       left:  e.pageX,
    //       top:   e.pageY
    //     });
    // });
  
    // $(window).on('scroll', function(e:any){
    //   console.log('scrolled')
    //     $('#cursor').css({
    //       left:  e.pageX,
    //       top:   e.pageY
    //     });
    // });
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
