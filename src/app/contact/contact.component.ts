import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  username: string = ""
  userComment: string = ""
  users: any = []
  convert: any = ""

  user = {
    name: this.username,
    comment: this.userComment
  }

  constructor() {
    if (localStorage.getItem("aboutUser") != null) {
      this.convert = localStorage.getItem("aboutUser")
      this.users = JSON.parse(this.convert)
      console.log(this.users); 
    }
  }

  show() {
    if (this.username != "" && this.userComment != "") {
      this.user = {
        name: this.username,
        comment: this.userComment
      }
      this.users.push(this.user)
      localStorage.setItem("aboutUser", JSON.stringify(this.users))
      this.userComment=""
      this.username=""
    }
  }



  ngOnInit(): void {
  }

}
