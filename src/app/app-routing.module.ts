import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './Pages/landing/landing.component';
const routes: Routes = [
  // {path:'blog/:id',component:BlogdetailComponent},
  // {path:'blog',component:LogolistComponent},
  // {path:'our-work',component:OurworksdetailComponent},
  {path:'',component:LandingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
