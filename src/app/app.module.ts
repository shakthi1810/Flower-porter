import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './Screens/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Screens/login/login.component';
import { SignupComponent } from './Screens/signup/signup.component';
import { LandingComponent } from './Screens/landing/landing.component';
import { HomeComponent } from './Screens/home/home.component';
import { FlowersComponent } from './Screens/flowers/flowers.component';
import { ProfileComponent } from './Screens/profile/profile.component';
import { OrdersComponent } from './Screens/orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    LandingComponent,
    HomeComponent,
    FlowersComponent,
    ProfileComponent,
    OrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  exports:[
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
