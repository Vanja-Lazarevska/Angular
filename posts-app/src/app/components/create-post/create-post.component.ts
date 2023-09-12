import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit{

  message: string
  constructor(private readonly postsService: PostsService) {}
  ngOnInit(): void {
    this.initFrom()
  }

  postForm: FormGroup


  initFrom ()  {
    this.postForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.max(50)]),
      content: new FormControl('', [Validators.required, Validators.max(100)]),
      author: new FormControl('', Validators.required),
      createdAt: new FormControl('', Validators.required),
      likes: new FormControl({value: 0, disabled:true})
    })


  }


  
  handleSubmit () {
      console.log(this.postForm)
      const inputValues = this.postForm.getRawValue()
      this.postsService.createPost(inputValues).then( result => {
        if(result) {
          this.message = 'Successfully created post'
        } else {
          this.message = 'Error while creating post'
        }
      })

      
  }



}
