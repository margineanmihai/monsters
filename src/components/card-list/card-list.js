import React from 'react';
import Card from '../card/card';
import {connect} from "react-redux";

class CardList extends React.Component {
    render() {
        const {monsters,searchKey,changeBg} = this.props;
        return(
            monsters && monsters
            .filter(function(monster){
                    const name = monster.name;
                    return name.toLowerCase().includes(searchKey);
                  },this)
            .map(monster => 
                <Card key={monster.id} monster={monster} changeBg={changeBg} />
            ) 
        );
    }
}

const mapStateToProps = state => ({
    monsters: state.monsters.monsterList,
    searchKey: state.searchKey.searchKey
})

export default connect(mapStateToProps)(CardList);