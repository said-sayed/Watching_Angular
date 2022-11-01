import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  salsh="far fa-eye-slash"
  types="password"
  constructor(private _AuthService:AuthService , private _Router:Router) { }

  loginForm = new FormGroup({
    email:new FormControl(null , [Validators.required , Validators.email]),
    password:new FormControl(null , [Validators.required , Validators.pattern("[A-Za-z][A-Za-z0-9]{3,15}")])
  })
  errors=""
  Login(){
    this._AuthService.login(this.loginForm.value).subscribe((response)=>{
      if(response.message == "success")
      {
        console.log(response);
        
        localStorage.setItem("keyUser" , response.token)
        this._AuthService.submitLogin()
        this._Router.navigate(["/home"])

      }
      else{
        console.log(response.message);

        if(response.message == "email doesn't exist")
        {
          this.errors=response.message
        }
        else{
          this.errors=response.message

        }
      }
    })
  }

  
  type(){
    this.types="text"
    this.salsh="far fa-eye"
  }
  slashForI(){
  this.salsh="far fa-eye-slash"
  this.types="password"
  }

  ngOnInit(): void {
  }

}
