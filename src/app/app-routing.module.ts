import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './Pages/landing/landing.component';
import { BlogsComponent } from './Pages/blogs/blogs.component';
import { BlogsdetailComponent } from './Pages/blogsdetail/blogsdetail.component';
import { OurworkdetailComponent } from './Pages/ourworkdetail/ourworkdetail.component';
const routes: Routes = [
  {path:'blog/:id',component:BlogsdetailComponent},
  {path:'blog',component:BlogsComponent},
  {path:'our-work',component:OurworkdetailComponent},
  {path:'',component:LandingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
