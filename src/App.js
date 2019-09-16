import React from 'react';
import './App.css';
import {Search} from './components/search/search';
import CardList from './components/card-list/card-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        monsters: [],
        searchField: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({searchField:event.target.value})
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(monsters => this.setState({ monsters }));
  }

  render() {
    const monsters = this.state.monsters.filter(function(monster){
      const name = monster.name;
      return name.toLowerCase().includes(this.state.searchField);
    },this)
    return(
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Search handleChange={this.handleChange} placeholder='Search monster' /> <br />
        <CardList monsters={monsters} />
      </div>
    )
  };
}

export default App;
