import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { Section1Component } from './Components/section1/section1.component';
import { Section2Component } from './Components/section2/section2.component';
import { Section3Component } from './Components/section3/section3.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { Section4Component } from './Components/section4/section4.component';
import { Section5Component } from './Components/section5/section5.component';
import { Section6Component } from './Components/section6/section6.component';
import { Section7Component } from './Components/section7/section7.component';
import { LandingComponent } from './Pages/landing/landing.component';
import { MenuComponent } from './Pages/menu/menu.component';
import { HttpClientModule } from "@angular/common/http";
import { DataService } from './data.service';
import { BlogsComponent } from './Pages/blogs/blogs.component';
import { BlogsdetailComponent } from './Pages/blogsdetail/blogsdetail.component';
import { OurworkdetailComponent } from './Pages/ourworkdetail/ourworkdetail.component';
import { CorporationspopupComponent } from './Components/corporationspopup/corporationspopup.component';
import { StartuppopupComponent } from './Components/startuppopup/startuppopup.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component,
    Section6Component,
    Section7Component,
    LandingComponent,
    MenuComponent,
    BlogsComponent,
    BlogsdetailComponent,
    OurworkdetailComponent,
    CorporationspopupComponent,
    StartuppopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
