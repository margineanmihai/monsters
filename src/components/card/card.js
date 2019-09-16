import React from 'react';
import './card.styles.css';
class Card extends React.Component {
    render() {
        const monster = this.props.monster;
        const imgSrc = "https://robohash.org/" + monster.id;
        // console.log(monster);
        return (
            <div className="monster">
                <img src={imgSrc} /><br />
                <span className="monsterName">{monster.name}</span><br />
                <span className="monsterMail">{monster.email}</span>
                
            </div>
        );
    }
}

export default Card;
