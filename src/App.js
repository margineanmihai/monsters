import React from 'react';
import Home from './components/home/home';
import PostList from './components/post-list/post-list';
import CommentList from './components/comment-list/comment-list';
import { Route } from "react-router-dom";
import './App.css';
import {AppTitle} from './App.styles.js';

class App extends React.Component {
  render() {
    return(
        <div className="App">
          <AppTitle>Monsters Rolodex</AppTitle>
          <Route exact path="/" component={Home} />
          <Route path="/posts/:userId" component={PostList} />
          <Route path="/comments" component={CommentList} />
        </div>
    )
  };
}

export default App;
