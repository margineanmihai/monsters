import React from 'react';
import Post from '../post/post';
import {AppTitle} from '../../App.styles.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    };
    componentDidMount () {
        const {userId} = this.props.match.params;
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then(response => response.json())
            .then(posts => this.setState({ posts }));
    }
    render() {
        const posts = this.state.posts;
        const {userName} =  this.props.location.state;
        return (
            <div>
                <AppTitle>{userName} posts </AppTitle>
                {posts.length && posts.map(post => 
                <Post key={post.id} post={post} userName={userName} />
                )} 
            </div>
        );
    }
}

export default Posts;