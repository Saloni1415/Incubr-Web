import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public data:DataService) { }

  ngOnInit(): void {
  }
  navigate(item:any){
    if(item=='Home'){
    }else if(item=='Clients'){
      setTimeout(()=>{
        document.getElementById('clients')?.scrollIntoView()
      },200)
    }
    else if(item=='Our Work'){
      setTimeout(()=>{
        document.getElementById('ourwork')?.scrollIntoView()
      },200)
    }
    else if(item=='Incubr impact'){
      setTimeout(()=>{
        document.getElementById('impact')?.scrollIntoView()
      },200)
    }
    else if(item=='Startups'){
      setTimeout(()=>{
        document.getElementById('startup')?.scrollIntoView()
        setTimeout(()=>{
          document.getElementById('startupopen')?.click()
        },500)
      },200)
    }
    else if(item=='Corporations'){
      setTimeout(()=>{
        document.getElementById('startup')?.scrollIntoView()
        setTimeout(()=>{
          document.getElementById('coropen')?.click()
        },500)
      },200)
    }
    else if(item=='Blogs'){
      setTimeout(()=>{
        document.getElementById('blogs')?.scrollIntoView()
      },200)
    }
  }
}
