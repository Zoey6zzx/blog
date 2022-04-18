import Comment from "../models/Comment";

export const getComments = postId => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(res => res.json())
        .then(comments => comments.map(comment => commentObjToModel(comment)));
};

export const commentObjToModel = comment => new Comment(comment.id, comment.name, comment.body, comment.email);