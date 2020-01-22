import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionPlayerComponent } from './question-player/question-player.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { PlayerComponent } from './player/player.component';
import { HttpClientModule } from '@angular/common/http';
//import { Config } from './config';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    QuestionPlayerComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
