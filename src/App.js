import React from 'react';
import Home from './components/home/home';
import PostList from './components/post-list/post-list';
import { Route } from "react-router-dom";
import './App.css';
import {AppTitle} from './App.styles.js';

class App extends React.Component {
  render() {
    return(
        <div className="App">
          <AppTitle>Monsters Rolodex</AppTitle>
          <Route exact path="/" component={Home} />
          <Route path="/:userId" component={PostList} />
        </div>
    )
  };
}

export default App;
