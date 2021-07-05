import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from '../app/pages/landing/landing.component'
import { LogolistComponent } from './pages/Bloglist/logolist.component'
import { BlogdetailComponent } from './pages/blogdetail/blogdetail.component'
const routes: Routes = [
  {path:'blog/:id',component:BlogdetailComponent},
  {path:'blog',component:LogolistComponent},
  {path:'',component:LandingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
