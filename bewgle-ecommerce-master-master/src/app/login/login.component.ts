import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;

  constructor(private router:Router) { }

  ngOnInit() {
    this.loginUserData = {
      email:"",
      password:""
    };
  }

  loginUserData = {
    email:"",
    password:""
  };

  login(){
    if(this.loginUserData.email==="admin" && this.loginUserData.password==="a123"){
      this.router.navigate(["/items"]);
    }else if(this.loginUserData.email==="" && this.loginUserData.password===""){
      alert("Please Enter the details");
    }else{
      alert("Incorrect Username or Password");
    }
  }

}
