import { useParams } from "react-router-dom";

export default function User(props) {
    const params = useParams();

    return(
        <div>User { params.userId }</div>
    );
}