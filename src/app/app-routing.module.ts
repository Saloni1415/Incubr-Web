import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from '../app/pages/landing/landing.component'
import { LogolistComponent } from '../app/pages/logolist/logolist.component'
const routes: Routes = [
  {path:'logo',component:LogolistComponent},
  {path:'',component:LandingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
