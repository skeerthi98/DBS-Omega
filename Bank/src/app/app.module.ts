import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from '@angular/common/http';
import { UserhomeComponent } from './userhome/userhome.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AccountopeninghomeComponent } from './accountopeninghome/accountopeninghome.component';
import { AccountopeningformComponent } from './accountopeningform/accountopeningform.component';
import { AccountclosingformComponent } from './accountclosingform/accountclosingform.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    UserhomeComponent,
    ProfileComponent,
    AccountSummaryComponent,
    LoginadminComponent,
    AdminhomeComponent,
    AccountopeninghomeComponent,
    AccountopeningformComponent,
    AccountclosingformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
