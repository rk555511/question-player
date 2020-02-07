import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../api/service.service';
import { Platform, MenuController } from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private api:ServiceService, public menu: MenuController) { }

  ngOnInit() {
  	this.menu.enable(false);
  }

  registerUser(user){
  	let newUser = {
  			name:user.form.value.name, 
  			email:user.form.value.email, 
  			password:user.form.value.password};
  		this.api.register(newUser);


  }

}
