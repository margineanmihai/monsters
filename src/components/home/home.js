import React from 'react';
import {Search} from '../search/search';
import CardList from '../card-list/card-list';
import {Button} from './home.styles';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            monsters: [],
            searchField: '',
            changeBg: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleBgChange = this.handleBgChange.bind(this);
    }
    handleChange(event) {
        this.setState({searchField:event.target.value})
    }
    
    handleBgChange(event) {
    this.state.changeBg === false ? this.setState({changeBg:true}) : this.setState({changeBg:false});
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
        return (
            <div>
                <Search handleChange={this.handleChange} placeholder='Search monster' /> 
                <Button onClick={this.handleBgChange}> Change card background color </Button><br />
                <CardList monsters={monsters} changeBg={this.state.changeBg} />
            </div>
        );
    }
}

export default Home;