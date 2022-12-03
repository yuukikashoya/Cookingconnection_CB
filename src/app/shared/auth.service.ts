import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  
  constructor(private fireauth:AngularFireAuth, private router:Router) { }


  login(emaillog:string,passwordlog:string){
    this.fireauth.signInWithEmailAndPassword(emaillog,passwordlog).then((res)=>{
      localStorage.setItem('token','true');
      this.router.navigate(['/about'])

    },err=>{
      alert(err.message)
      this.router.navigate(['/login'])
    })
  }

  //signup
  signup(email:string, password:string)
  {
    this.fireauth.createUserWithEmailAndPassword(email,password).then((res)=>{
      alert("User is now Registered")
      this.router.navigate(['/aut'])
    },err=>{
      alert(err.message)
      this.router.navigate(['/signup'])
    })
  }

  //logout
  logout(){
    this.fireauth.signOut().then(()=>{
      localStorage.removeItem('token');
      this.router.navigate(['/login'])
    },err=>{
      alert(err.message)
    })
  }

}
