import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private _HttpClient:HttpClient) { }

  registertion(registerInform:FormGroup):Observable<any>{
    return this._HttpClient.post("https://route-egypt-api.herokuapp.com/signup" , registerInform )
  }
}
