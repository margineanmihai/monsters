import React from 'react';
import {CardContainer, MonsterName} from './card.styles';
import { Link } from "react-router-dom";
class Card extends React.Component {
    render() {
        const {monster,changeBg} = this.props;
        const imgSrc = "https://robohash.org/" + monster.id;
        return (
            <CardContainer changeBg = {changeBg}>
                <img src={imgSrc} alt='Monster' /><br />
                <MonsterName>{monster.name}</MonsterName>
                <MonsterName email>{monster.email}</MonsterName><br />
                <Link to={{
                    pathname:`/posts/${monster.id}`,
                    state: {userName:monster.name}
                }}> Posts </Link>
            </CardContainer>
        );
    }
}

export default Card;
