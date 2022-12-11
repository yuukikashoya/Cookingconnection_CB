import { Component, OnInit } from '@angular/core';
import { Database,set,ref ,onValue} from '@angular/fire/database';
import { Router } from '@angular/router';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(public database:Database,private router:Router) { }

  ngOnInit(): void {
  }
  
  com(value: any) {
    const uid = sessionStorage.getItem('id');

 //get value

 const starCountRef = ref(this.database, 'users/' + uid );
 onValue(starCountRef, (snapshot) => {
   const data = snapshot.val();
const username = data.username

set(ref(this.database, 'comments/' + uid), {
      username: username,
      comment: value.comment

    }
   
    );    alert('comments sent');
      this.router.navigate(['/comments'])
 })


    
}
test(){
  const uid = sessionStorage.getItem('id');
  const starCountRef = ref(this.database, 'comments/' + uid );
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
alert(data.comment)
})
}

}  
