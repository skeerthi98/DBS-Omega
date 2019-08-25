import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

export const routes:Routes = [
   {path:'',redirectTo:'home',pathMatch:'full'},
 {path:"login",component:LoginComponent},
 {path:"register",component:RegisterComponent},
 {path:"home",component:HomeComponent},
 {path:"**",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
