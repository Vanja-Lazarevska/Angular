import { Component, Input } from '@angular/core';
import { Posts, PostsRaw } from 'src/app/interfaces/posts.interface';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent  {

  @Input()
  post: Posts

}


