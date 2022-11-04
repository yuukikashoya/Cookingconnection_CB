import { Sabog } from "./post.model";
import { Injectable } from "@angular/core";

@Injectable ({providedIn: 'root'})
export class PostService{
   postList: Sabog[]=[new Sabog('1','1','1'),new Sabog('1','1','1')]



   getPost(){
      return this.postList
   }
}



