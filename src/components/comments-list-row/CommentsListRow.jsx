export default function CommentsListRow(props) {
    return(
        <tr>
            <td>{props.comment.id}</td>
            <td>{props.comment.title}</td>
            <td>{props.comment.body}</td>
        </tr>
    );
}