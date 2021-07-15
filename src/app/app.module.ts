import { AppRoutingModule } from './app-routing.module';
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingComponent } from './pages/landing/landing.component';
import { FooterComponent } from './components/footer/footer.component';
import { WwdComponent } from './components/wwd/wwd.component';
import { OurclientsComponent } from './components/ourclients/ourclients.component';
import { OurworksComponent } from './components/ourworks/ourworks.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { AboutComponent } from './components/about/about.component';
import { LogolistComponent } from './pages/Bloglist/logolist.component';
import { BlogdetailComponent } from './pages/blogdetail/blogdetail.component';
import { OurworksdetailComponent } from './pages/ourworksdetail/ourworksdetail.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    FooterComponent,
    WwdComponent,
    OurclientsComponent,
    OurworksComponent,
    BlogsComponent,
    AboutComponent,
    LogolistComponent,
    BlogdetailComponent,
    OurworksdetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
