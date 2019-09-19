import React from 'react';
import Card from '../card/card';
class CardList extends React.Component {
    render() {
        const {monsters,changeBg} = this.props;
        return(
            monsters && monsters.map(monster => 
                <Card key={monster.id} monster={monster} changeBg={changeBg} />
            ) 
        );
    }
}

export default CardList;