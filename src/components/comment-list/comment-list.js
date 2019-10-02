import React from 'react';
import {connect} from "react-redux";
import {AppTitle} from '../../App.styles.js';
import {CardContainer} from '../card/card.styles';
import {setCommentsList} from "../../redux/comments/comments.actions";

class CommentList extends React.Component {

    componentDidMount () {
        const params = new URLSearchParams(this.props.location.search);
        const postId = params.get("postId")
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(response => response.json())
            .then(comments => 
                {
                    this.props.setCommentsList(comments)
                });
    }

    render() {
        const {comments} = this.props;
        return (
            <div>
                <AppTitle> Comment List</AppTitle>
                {comments.length && comments.map(comment => 
                    <div key={comment.id}>
                        <CardContainer>
                            <p>Post id: {comment.postId}</p>
                            <p>Comment id: {comment.id}</p>
                            <p>Name: {comment.name}</p>
                            <p>Email: {comment.email}</p>
                            <p>Body: {comment.body}</p>
                        </CardContainer>
                    </div>
                )}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setCommentsList: comments => dispatch(setCommentsList([...comments]))
})

const mapStateToProps = state => ({
    comments: state.comments.commentsList,
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);