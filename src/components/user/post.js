import React from 'react';
import {CardContainer} from '../card/card.styles';
import {Button} from './post.styles';
import { Link } from "react-router-dom";

class Post extends React.Component {
    handleDelete = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,
            {
                method: 'delete'
            })
          .then(data => console.log(data))
          .catch(error => console.error(error));
    }

    handleEdit = (id) => {
    }

    render() {
        const {post} = this.props;
        return (
            <CardContainer>
                <p>User id: {post.userId}</p>
                <p>Post id: {post.id}</p>
                <p>Title: {post.title}</p>
                <p>Body: {post.body}</p>
                <Button onClick={this.handleDelete.bind(this,post.id)}> Delete </Button>
                <Link to={{
                    pathname:`/edit-post`,
                    state: {post:post}
                }}> Edit </Link>
                <br />
            </CardContainer>
        );
    }
}

export default Post;