import { Component, OnInit } from '@angular/core';
import { Auth,signOut   } from "@angular/fire/auth";

import {  Router } from '@angular/router';
import { PostService } from '../post.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public auth: Auth,private router: Router,private post:PostService) { }

  ngOnInit(): void {
  }
signout(){
  signOut(this.auth).then(() => {
    localStorage.clear();
    localStorage.removeItem('token');
    localStorage.removeItem('userid');
    this.post.log(false)

    this.router.navigate(['/log'])
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}
}
