import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
 
  user= {username: 'vijay', password: 'password'}
  error:boolean=false;
  constructor(private route:Router){

  }
  onSubmit(form:NgForm){
    
    
  if(this.user.username == form.control.value.username && this.user.password == form.control.value.password)
  {
    console.log(form.control.value);

    sessionStorage.setItem('username', form.control.value.username);  
    this.route.navigate(['home/feedback'])
  }
  else{
    this.error=true
  }
}

}
