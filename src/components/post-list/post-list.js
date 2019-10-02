import React from 'react';
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import {AppTitle} from '../../App.styles.js';
import { Button,Input,Textarea } from './post-list.styles';
import {CardContainer} from '../card/card.styles';
import {setPostsList} from "../../redux/posts/posts.actions";
import {deletePost} from "../../redux/posts/posts.actions";
import {editPost} from "../../redux/posts/posts.actions";

class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId:''
        }
    };
    componentDidMount () {
        const {userId} = this.props.match.params;

        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then(response => response.json())
            .then(posts => 
                {
                    posts.length && posts.map(post => 
                        post.editMode = false
                    )
                    this.props.setPostsList(posts)
                    this.setState({ userId })
                });
    }

    handleDelete = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,
            {
                method: 'delete'
            })
          .then(data => {
                console.log("delete response = ",data);
                this.props.deletePost(id);
            })
          .catch(error => console.error(error));
    }

    handleEdit = (id) => {
        const {posts} = this.props;
        console.log("posts = ", posts); 
        const editedPost = posts.length && posts.find(function(post) {
            return post.id === id;
        })
        editedPost.editMode = true;
        this.props.setPostsList(posts);
    }

    handleSave = (id) => {
        const {posts} = this.props;
        const editedPost = posts.length && posts.find(function(post) {
            return post.id === id;
        })
        editedPost.editMode = false;
        const data = {
            id: id,
            userId: this.state.userId,
            title: editedPost.title,
            body: editedPost.body
        }
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,
            {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
        .then(data => {
                console.log("save response = ",data);
                this.props.setPostsList(posts);
            })
        .catch(error => console.error(error));
    }

    handleTitleChange = (event, postId) => {
        const {posts} = this.props;   
        const editedPost = posts.length && posts.find(function(post) {
            return post.id === postId;
        })
        editedPost.title = event.target.value;
        this.props.setPostsList(posts);
    }
    handleBodyChange = (event, postId) => {
        const {posts} = this.props;  
        const editedPost = posts.length && posts.find(function(post) {
            return post.id === postId;
        })
        editedPost.body = event.target.value;
        this.props.setPostsList(posts);
    }

    render() {
        const {posts} = this.props;
        const {userName} =  this.props.location.state;
        return (
            <div>
                <AppTitle>{userName} posts </AppTitle>
                {posts.length && posts.map(post => 
                    <div key={post.id}>
                        <CardContainer>
                            <p>User id: {post.userId}</p>
                            <p>Post id: {post.id}</p>
                            <p>
                                <label>Title:</label> <br />
                                {
                                    post.editMode ? 
                                    <Input value={post.title} 
                                        onChange={ (event) => this.handleTitleChange(event,post.id)} /> :
                                    post.title
                                }
                                
                            </p>
                            <p>
                                <label>Body: </label> <br />
                                {
                                    post.editMode ? 
                                    <Textarea rows="6" onChange={(event) => this.handleBodyChange(event,post.id)} 
                                        value={post.body} /> :
                                    post.body
                                }
                            </p>
                            <p>
                            <Link to={{
                                    pathname: `/comments`,
                                    search: `?postId=${post.id}`
                                }}> Comments </Link>
                            </p>
                            <Button onClick = { () => this.handleDelete(post.id)}>Delete</Button>
                            {
                                post.editMode ? <Button onClick = { () => this.handleSave(post.id)}>Save</Button>:
                                <Button onClick = { () => this.handleEdit(post.id) }>Edit</Button>
                            }
                        </CardContainer>
                        
                    </div>
                
                )} 
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    setPostsList: posts => dispatch(setPostsList([...posts])),
    deletePost: id => dispatch(deletePost(id)),
    editPost: newPost => dispatch(editPost(newPost))
})

const mapStateToProps = state => ({
    posts: state.posts.postsList,
})

export default connect(mapStateToProps, mapDispatchToProps)(PostList);