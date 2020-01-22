import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionPlayerComponent } from './question-player/question-player.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { PlayerComponent } from './player/player.component';

const routes: Routes = [
	{ path: 'dashboard',  component: DashboardComponent},
	{ path: 'question-player',  component: QuestionPlayerComponent},
	{ path: 'login',  component: LoginComponent},
	{ path: 'signup',  component: SignupComponent},
	{ path: 'home',  component: HomeComponent},
	{ path: 'player',  component: PlayerComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
