import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http:HttpClient,private router:Router) { }
  user:any="";

  checkstatus = new BehaviorSubject<boolean>(false);
  isUserLogin = this.checkstatus.asObservable();

  checkLogin(){
    if(localStorage.getItem('access_token')){
  		this.checkstatus.next(true);
  	}else{
  		this.checkstatus.next(false);
  	}
  }

  login(userCredentials){
  	return this.http.post(environment.apiURL+"auth/login",userCredentials).subscribe(loginedUser=>{
  		this.user=loginedUser;
  		localStorage.setItem('access_token',this.user.access_token);
      this.checkLogin();
  	})
  }


  register(user){
  	console.log("=== Register Calling ===");
  	return this.http.post(environment.apiURL+"auth/register",user).subscribe(registeredUser=>{
      console.log(registeredUser);
      
    })
  }

  checkUserLogin(){
    if(localStorage.getItem('access_token')){
      return true;
    }else{
      return false;
    }
  }

  userLogout(){

     return this.http.post(environment.apiURL+"auth/logout",{}).subscribe(registeredUser=>{
      console.log(registeredUser);
      localStorage.removeItem('access_token');
      this.router.navigate(['/login']);
      
    }) 
  }

}
