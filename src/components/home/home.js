import React from 'react';
import {connect} from "react-redux";
import {Search} from '../search/search';
import CardList from '../card-list/card-list';
import {Button} from './home.styles';
import {fetchMonstersStart} from "../../redux/monsters/monsters.actions";
import {setSearchKey} from "../../redux/search/search.actions";
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            changeBg: false
        };
    }
    handleChange = (event) => {
        this.props.setSearchKey(event.target.value)
    }
    
    handleBgChange = (event) => {
        this.state.changeBg === false ? this.setState({changeBg:true}) : this.setState({changeBg:false});
    }
    
    componentDidMount() {
        this.props.fetchMonstersStart();
    }

    render() {
        return (
            <div>
                <Search handleChange={this.handleChange} placeholder='Search monster' /> 
                <Button onClick={this.handleBgChange}> Change card background color </Button><br />
                <CardList changeBg={this.state.changeBg} />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    fetchMonstersStart: () => dispatch(fetchMonstersStart()),
    setSearchKey: search_key => dispatch(setSearchKey(search_key))
})
export default connect(null, mapDispatchToProps)(Home);