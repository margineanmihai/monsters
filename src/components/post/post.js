import React from 'react';
import {CardContainer} from '../card/card.styles';
class Post extends React.Component {
    render() {
        const {post} = this.props;
        return (
            <CardContainer>
                <p>User id: {post.userId}</p>
                <p>Post id: {post.id}</p>
                <p>Title: {post.title}</p>
                <p>Body: {post.body}</p>
            </CardContainer>
        );
    }
}

export default Post;