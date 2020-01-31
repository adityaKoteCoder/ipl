import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { componentFactoryName } from '@angular/compiler';
import { }from './home.component'


const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:"full"
  },
  {
    path:'home'
    component:HomeComponent,
  },
  {
    path:'team'
    component:HomeComponent,
  },
  {
    path:'news'
    loadChildren:()=>import('./news/newsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
