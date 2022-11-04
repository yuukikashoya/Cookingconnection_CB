import { Component, OnInit , Input} from '@angular/core';
import { Sabog } from '../post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
@Input() post?: Sabog
  constructor() { }

  ngOnInit(): void {
  }

}
