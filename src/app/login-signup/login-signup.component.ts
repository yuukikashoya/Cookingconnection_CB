import { Component, OnInit } from '@angular/core';
import { PostService} from '../post.service';
import { AuthService } from '../shared/auth.service';


@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {
  email: string = '';
  emaillog: string = '';
  password: string = '';
  passwordlog: string = '';
  repeatpassword: string = '';
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
  signup(){
    if(this.email == ''){
      alert("You Have to enter your email")
      return; 
    }
    if(this.password && this.repeatpassword == ''){
      alert("You have to enter your password")
      return;
    }
    this.auth.signup(this.email, this.password);
    this.email='';
    this.password='';
    this.repeatpassword='';
  }
// dczx
  login(){
    if(this.emaillog == ''){
      alert("You Have to enter your email")
      return; 
    }
    if(this.passwordlog == ''){
      alert("You have to enter your password")
      return;
    }
    this.auth.login(this.emaillog, this.passwordlog);
    this.emaillog='';
    this.passwordlog=';'
  }
  
}

