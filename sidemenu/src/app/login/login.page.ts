import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../api/service.service';
import { Router } from '@angular/router';
import { Platform, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isLogin = false;
  constructor(private api:ServiceService, private router:Router, public menu: MenuController) { }

  ngOnInit() {
    this.menu.enable(false);
  }


  login(form){
  	console.log(" == Start working ==");
  	console.log(form);
    let userCredentails = {
        email:form.form.value.email, 
        password:form.form.value.password
      };
      this.api.login(userCredentails);
      this.api.checkLogin();
      this.api.checkstatus.subscribe(currentStatus=>{
        console.log(currentStatus);
        console.log("=== Called ====");
         this.isLogin = currentStatus;
         if(currentStatus){
           this.menu.enable(true);
           this.router.navigate(['/home']);  
         }
      })
       //

  }

}
