import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) {
    if(localStorage.getItem("keyUser") != null)
    {
      this.submitLogin()
    }
   }

  currentUser=new BehaviorSubject(null);
  submitLogin(){

   let token:any = localStorage.getItem("keyUser")
   this.currentUser.next(jwtDecode(token))
   console.log(this.currentUser);
  }

 

  registration(formData:any):Observable<any>{
   return this._HttpClient.post("https://route-egypt-api.herokuapp.com/signup" ,formData )
  }
  login(loginData:any):Observable<any>{
    return this._HttpClient.post( "https://route-egypt-api.herokuapp.com/signin" ,loginData)

  }
}
