import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from '../app/pages/landing/landing.component'
import { LogolistComponent } from './pages/Bloglist/logolist.component'
import { BlogdetailComponent } from './pages/blogdetail/blogdetail.component'
import { OurworksdetailComponent } from './pages/ourworksdetail/ourworksdetail.component'
const routes: Routes = [
  {path:'blog/:id',component:BlogdetailComponent},
  {path:'blog',component:LogolistComponent},
  {path:'our-work',component:OurworksdetailComponent},
  {path:'',component:LandingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
