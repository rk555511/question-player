import { Injectable } from '@angular/core';
import { Config } from './config';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  config = new Config();
  constructor(private http:HttpClient) { }

  register(user:any){
  	console.log("== Calling ===");
  	return this.http.post(this.config.apiUrl+'register',user);
  }
}
