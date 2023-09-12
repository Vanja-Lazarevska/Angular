import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, Timestamp } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { Posts, PostsRaw } from '../interfaces/posts.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private readonly fireStore: Firestore) { }
  

  getAllPosts () {
    const postsCollection = collection(this.fireStore, 'posts')

    const postsCollectionData = collectionData(postsCollection, {idField: 'id'}) as Observable<PostsRaw[]>

    console.log(postsCollectionData)

    return postsCollectionData
    
  }

  createPost (postValues: Posts) {
  
    const newPost: PostsRaw = {
      title: postValues.title,
      content: postValues.content,
      author: postValues.author,
      createdAt: Timestamp.fromDate(new Date(postValues.createdAt)),
      likes: postValues.likes
    }

    const postCollection = collection(this.fireStore, 'posts')

    return addDoc(postCollection, newPost)

  }
}
