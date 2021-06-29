import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  links =['Home', 'Services' ,'Blogs', 'Cases' ,'About']
  contact_links = ['gopal.batra@incubr.com','+91-99999 88493','Contact']
  constructor() { }

  ngOnInit(): void {
  }

}
