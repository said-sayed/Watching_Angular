import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  islogin:boolean=false
  said:any=""
  constructor( private _AuthService:AuthService , private _Router:Router,private _ActivatedRoute:ActivatedRoute) {

  this.said=_ActivatedRoute.snapshot
    
    _AuthService.currentUser.subscribe(()=>{
      if(_AuthService.currentUser.getValue() == null){
        this.islogin=false
      }
      else{
        this.islogin= true
      }
    })

   
  }

  isLogout(){
    this._AuthService.currentUser.next(null)
    localStorage.removeItem("keyUser")
    this._Router.navigate(["/login"])
  }


  ngOnInit(): void {
  }

}
