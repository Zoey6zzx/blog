import React from "react";
import { getUsers } from "../../functions/users";
import UsersListRow from "../users-list-row/UsersListRow";

export default class UsersList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        };
    }

    componentDidMount() {
        getUsers().then(users => this.setState({ users }));
    }

    render() {
        const rows = this.state.users.map(user => <UsersListRow user={user} />);
        return(
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    { rows }
                </tbody>
            </table>
        )
        
    }
}