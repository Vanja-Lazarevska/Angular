import { Component, OnInit } from '@angular/core';
import { map, pipe } from 'rxjs';
import { Posts, PostsRaw } from 'src/app/interfaces/posts.interface';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent  implements OnInit{

  allPosts: Posts[]

  constructor(private readonly postsService: PostsService){}
  ngOnInit(): void {
    this.postsService.getAllPosts().subscribe((data)=> {
      const posts = data.map((posts: PostsRaw) => {
        return {
          title: posts.title,
          content: posts.content,
          author: posts.author,
          createdAt: posts.createdAt.toDate(),
          likes: posts.likes
        }})
        this.allPosts = posts
    }
      )}

}

