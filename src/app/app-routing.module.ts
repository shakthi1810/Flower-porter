import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Screens/login/login.component';
import { SignupComponent } from './Screens/signup/signup.component';
import { LandingComponent } from './Screens/landing/landing.component';
import { HomeComponent } from './Screens/home/home.component';
import { FlowersComponent } from './Screens/flowers/flowers.component';
import { ProfileComponent } from './Screens/profile/profile.component';
import { OrdersComponent } from './Screens/orders/orders.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch: 'full'
  },
  {
    path:'landing',
    component:LandingComponent,
    children:[
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'signup',
        component:SignupComponent
      }
    ]
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'flowers',
    component:FlowersComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'orders',
    component:OrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
