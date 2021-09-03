import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public data:DataService) { }
  items = ['Home','Clients','Startups','Corporations','Our Work','Incubr impact']
  ngOnInit(): void {
  }
  
  navigate(item:any){
    if(item=='Home'){
      this.data.toggleMenu()
    }else if(item=='Clients'){
      this.data.toggleMenu()
      setTimeout(()=>{
        document.getElementById('clients')?.scrollIntoView()
      },200)
    }
    else if(item=='Our Work'){
      this.data.toggleMenu()
      setTimeout(()=>{
        document.getElementById('ourwork')?.scrollIntoView()
      },200)
    }
    else if(item=='Incubr impact'){
      this.data.toggleMenu()
      setTimeout(()=>{
        document.getElementById('impact')?.scrollIntoView()
      },200)
    }
    else if(item=='Startups'){
      this.data.toggleMenu()
      setTimeout(()=>{
        document.getElementById('startup')?.scrollIntoView()
        setTimeout(()=>{
          document.getElementById('startupopen')?.click()
        },500)
      },200)
    }
    else if(item=='Corporations'){
      this.data.toggleMenu()
      setTimeout(()=>{
        document.getElementById('startup')?.scrollIntoView()
        setTimeout(()=>{
          document.getElementById('coropen')?.click()
        },500)
      },200)
    }
  }
}
