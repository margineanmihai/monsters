import React from 'react';
import {AppTitle} from '../../App.styles.js';
import { Button,Input,Textarea } from './post-list.styles';
import {CardContainer} from '../card/card.styles';

class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            title:'',
            body:'',
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
                    this.setState({ posts, userId })
                });
    }

    handleDelete = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,
            {
                method: 'delete'
            })
          .then(data => {
                console.log(data);
                const newPosts = this.state.posts.filter(function(post){
                    return id!== post.id;
                  })
                this.setState({posts:newPosts});
            })
          .catch(error => console.error(error));
    }

    handleEdit = (id) => {
        const posts = this.state.posts; 
        posts.length && posts.map(post => 

            post.id === id ? post.editMode = true : ''
        )
        this.setState({posts});
    }

    handleSave = (id) => {
        const data = {
            userId: this.state.userId,
            title: this.state.title,
            body: this.state.body
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
                console.log(data);
            })
        .catch(error => console.error(error));

        const posts = this.state.posts; 
        posts.length && posts.map(post => 
            post.id === id ? ( 
                post["editMode"] = false,
                post.title = this.state.title !== '' ? this.state.title : post.title,
                post.body = this.state.body !== '' ? this.state.body : post.body
            ) : ''
        )
        this.setState({posts});
    }

    handleTitleChange = (event, postId) => {
        const posts = this.state.posts; 
        const editedPosts = posts.length && posts.map(post => 
            {
                if(post.id === postId) {
                    post.title = event.target.value;
                } 
                return post;
            }
        )
        console.log(editedPosts);
        this.setState({posts: editedPosts});
    }
    handleBodyChange = (event, postId) => {
        const posts = this.state.posts; 
        const editedPosts = posts.length && posts.map(post => 
            {
                if(post.id === postId) {
                    post.body = event.target.value;
                } 
                return post;
            }
        )
        console.log(editedPosts);
        this.setState({posts: editedPosts});
    }

    render() {
        const posts = this.state.posts;
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
                                    <Input value={this.state.title !== '' ? this.state.title : post.title} 
                                        onChange={ (event) => this.handleTitleChange(event,post.id)} /> :
                                    post.title
                                }
                                
                            </p>
                            <p>
                                <label>Body: </label> <br />
                                {
                                    post.editMode ? 
                                    <Textarea rows="6" onChange={(event) => this.handleBodyChange(event,post.id)} 
                                        value={this.state.body !== '' ? this.state.body : post.body} /> :
                                    post.body
                                }
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

export default PostList;