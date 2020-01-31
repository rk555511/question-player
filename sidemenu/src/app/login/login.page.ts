import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../api/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private api:ServiceService) { }

  ngOnInit() {
  }


  login(form){
  	console.log(" == Start working ==");
  	console.log(form);
    let userCredentails = {
        email:form.form.value.email, 
        password:form.form.value.password
      };
      this.api.login(userCredentails);

  }

}
