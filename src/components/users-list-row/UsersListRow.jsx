import React from "react";
import { Link } from "react-router-dom";

export default class UsersListRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td>{ this.props.user.id }</td>
                <td>{ this.props.user.name }</td>
                <td>{ this.props.user.email }</td>
                <td className="text-end">
                    <Link className="btn btn-primary" to={`/users/${this.props.user.id}`}>Dettaglio</Link>
                    <Link className="btn btn-primary" to={`/users/${this.props.user.id}/posts`}>Post</Link>
                </td>
            </tr>
        )
    }
}