import React from 'react';
import {CardContainer} from '../card/card.styles';
import {Button} from './post.styles';

class EditPost extends React.Component {
    render() {
        const {post} = this.props;
        return (
            <CardContainer>
                <p>User id: {post.userId}</p>
                <p>Post id: {post.id}</p>
                <p>Title: {post.title}</p>
                <p>Body: {post.body}</p>
                <Button onClick={this.handleDelete.bind(this,post.id)}> Delete </Button>
                <Button onClick={this.handleEdit.bind(this,post.id)}> Edit </Button>
                <br />
            </CardContainer>
        );
    }
}
export default EditPost;
