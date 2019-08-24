import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router'
import { MainComponent } from './main/main.component';
import {WelcomeCompnent} from '/welcome/welcome.component';
import { RegisterComponent } from './register/register.component';
import { TrackingComponent } from './tracking/tracking.component';
import { LoginComponent } from './login/login.component';
import {FoodComponent} from './food/food.component';

//if ("path"=="about"){"component":"AboutComponent"}

export const myRouteConfig:Routes =[
  //if no parameters are passed after localhost
  {path:'',redirectTo:'welcome',pathMatch:'full'} //plese match full path after localhost
  ,{path:"welcome",component:WelcomeComponent} //passing parameter to url we use :
  ,{path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"tracking",component:TrackingComponent},
  {path:"main",component:MainComponent},
   {path:"food",component:FoodComponent},
  {path:"**",component:WelcomeComponent}]; //any thing not equal to the above ones, we use **

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(myRouteConfig) //forRoot means for top most in the hierarchy.(appmodule.ts)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutesModule { }
