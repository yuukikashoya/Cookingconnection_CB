import { Component, OnInit } from '@angular/core';
import { Auth, createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "@angular/fire/auth";
import { Database,set,ref,update,onValue,getDatabase } from '@angular/fire/database';
import {  Router } from '@angular/router';
import { PostService } from '../post.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth: Auth,public database:Database,private router:Router ,private post:PostService) { }

  ngOnInit(): void {
  }

  registerUser(value: any){
    signInWithEmailAndPassword(this.auth, value.email, value.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;

    alert('user login');
  const date = new Date();


  //get value

    sessionStorage.setItem('id',user.uid);

    this.post.log(true)
          this.router.navigate(['/aut'])



  update(ref(this.database, 'users/' + user.uid),{
  last_login:date

  }
  );
  
      // creadential dint match
    },err=>{
      alert(err.message)
      this.router.navigate(['/log'])
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  
  }

}
