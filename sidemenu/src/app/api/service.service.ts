import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http:HttpClient) { }
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
  		localStorage.setItem('access_token',this.user);
  	})
  }


  register(user){
  	console.log("=== Register Calling ===");
  	console.log(user);
  }

}
