import React from 'react';
import {connect} from "react-redux";
import {AppTitle} from '../../App.styles.js';
import {CardContainer} from '../card/card.styles';
import {fetchCommentsStart} from "../../redux/comments/comments.actions";

class CommentList extends React.Component {

    componentDidMount () {
        const params = new URLSearchParams(this.props.location.search);
        const postId = params.get("postId");
        this.props.fetchCommentsStart(postId);
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
    fetchCommentsStart: (postId) => dispatch(fetchCommentsStart(postId))
})

const mapStateToProps = state => ({
    comments: state.comments.commentsList,
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);