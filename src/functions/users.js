import { User } from "../models/User"

export const getUsers = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => users.map(user => new User(user.id, user.email, user.name)));
};