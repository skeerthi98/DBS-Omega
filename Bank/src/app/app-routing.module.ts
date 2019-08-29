import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {UserhomeComponent} from './userhome/userhome.component';
import {ProfileComponent} from './profile/profile.component';
import {AccountSummaryComponent} from './account-summary/account-summary.component';
import {AdminhomeComponent} from './adminhome/adminhome.component';

import {LoginadminComponent} from './loginadmin/loginadmin.component';
import {AccountopeninghomeComponent} from './accountopeninghome/accountopeninghome.component';
import { AccountopeningformComponent } from './accountopeningform/accountopeningform.component';
export const routes:Routes = [
   {path:'',redirectTo:'home',pathMatch:'full'},
 {path:"login",component:LoginComponent},
 {path:"register",component:RegisterComponent},
 {path:"home",component:HomeComponent},
 {path:"userhome",component:UserhomeComponent},
{path:"profile",component:ProfileComponent},
{path:"summary",component:AccountSummaryComponent},
{path:"loginadmin",component:LoginadminComponent},
{path:"adminhome",component:AdminhomeComponent},
{path:"accountopeninghome",component:AccountopeninghomeComponent},
{path:"accountopeninghome",component:AccountopeningformComponent},
 {path:"**",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
