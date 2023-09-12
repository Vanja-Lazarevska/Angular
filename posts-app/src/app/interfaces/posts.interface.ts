import { Timestamp } from "@angular/fire/firestore";

export interface PostsRaw {
    title: string,
    content: string,
    author: string,
    createdAt: Timestamp,
    likes: number
}

export interface Posts {
    title: string,
    content: string,
    author: string,
    createdAt: Date,
    likes: number
}
