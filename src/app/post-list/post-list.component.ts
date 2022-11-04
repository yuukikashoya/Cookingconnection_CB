import { Component, OnInit } from '@angular/core';
import { Sabog } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
postList: Sabog[]=[]
  constructor( private postService: PostService) { }

  ngOnInit(): void {
this.postList= this.postService.getPost()
  }

}
