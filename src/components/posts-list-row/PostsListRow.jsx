import { Link } from "react-router-dom";

export default function PostsListRow(props) {
    return(
        <tr>
            <td>{ props.post.id }</td>
            <td>{ props.post.title }</td>
            <td>
                <Link className="btn btn-primary" to={`/posts/${props.post.id}/comments`}>Comment</Link>
            </td>
        </tr>
    )
}