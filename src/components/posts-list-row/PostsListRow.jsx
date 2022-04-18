export default function PostsListRow(props) {
    return(
        <tr>
            <td>{ props.post.id }</td>
            <td>{ props.post.title }</td>
            <td></td>
        </tr>
    )
}