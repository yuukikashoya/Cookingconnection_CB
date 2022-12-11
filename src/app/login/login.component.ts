import { Component, OnInit } from '@angular/core';
import { Auth, createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "@angular/fire/auth";
import { Database,set,ref,update } from '@angular/fire/database';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth: Auth,public database:Database,private router:Router) { }

  ngOnInit(): void {
  }

  registerUser(value: any){
    signInWithEmailAndPassword(this.auth, value.email, value.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      this.router.navigate(['/aut'])
    alert('user login');
  const date = new Date();
  update(ref(this.database, 'users/' + user.uid),{
  last_login:date

  });
  
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  
  }

}
