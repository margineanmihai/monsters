import React from 'react';
import Card from '../card/card';
class CardList extends React.Component {
    render() {
        const monsters = this.props.monsters;
        // console.log(typeof monsters);
        // console.log(monsters);
        return(
            monsters && monsters.map(monster => 
                <Card key={monster.id} monster={monster} />
            ) 
        );
    }
}

export default CardList;