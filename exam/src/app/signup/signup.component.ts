import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 	
  constructor(private api:AppServiceService) { }
  
  emailExist:any = false;
  isRegiesterd:any = false;
  
  ngOnInit() {
  }

  register(form){
  	const user = {
  		name:form.form.controls.full_name.value,
  		email:form.form.controls.email.value,
  		password:form.form.controls.password.value
	}
	//console.log(user);
  	var result = this.api.register(user).subscribe(x=>{
  		var response:any;
  		response = x;
  		if(response.error){
  			this.emailExist = true;
  		}else{
  			this.isRegiesterd = true;
  			this.emailExist = false;
  		}
  	});
  	console.log(result);
  	//console.log("== Here code for registertation ===");
  }
}
