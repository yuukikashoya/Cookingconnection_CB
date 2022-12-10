import { Component, OnInit } from '@angular/core';
import { Auth, createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



}
