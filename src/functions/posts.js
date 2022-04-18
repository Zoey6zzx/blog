import Post from "../models/Post"
import { userObjToModel } from "./users"

export const getPosts = (userId) => {
    return fetch(`https://jsonplaceholder.typicode.com/${userId ? `user/${userId}/posts` : 'posts' }?_expand=user`)
        .then(res => res.json())
        .then(posts => posts.map(post => new Post(
            post.id,
            post.title,
            post.body,
            post.user ? userObjToModel(post.user) : null
        )));
}