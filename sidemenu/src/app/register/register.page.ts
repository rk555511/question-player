import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../api/service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private api:ServiceService) { }

  ngOnInit() {
  	//console.log(environment);
  }

  registerUser(user){
  	let newUser = {
  			name:user.form.value.name, 
  			email:user.form.value.email, 
  			password:user.form.value.password};
  		this.api.register(user);


  }

}
