import { Sabog } from "./post.model";
import { Injectable } from "@angular/core";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable ({providedIn: 'root'})
export class PostService{
   postList: Sabog[]=[new Sabog('1','1','1'),new Sabog('1','1','1')]



      constructor(private fireauth:AngularFireAuth, private router:Router) { }
    
    
      login(email:string,password:string){
        this.fireauth.signInWithEmailAndPassword(email,password).then((res)=>{
          localStorage.setItem('token','true');
          this.router.navigate(['/aut'])
    
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
   
   getPost(){
      return this.postList
   }
}

