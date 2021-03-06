import styled, { css } from 'styled-components';

export const CardContainer = styled.div`
    display: inline-block;
    width: 30%;
    margin: 20px;
    padding-bottom: 20px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 15px;
    background: linear-gradient(to top, green, 30%, yellow);

    ${props => props.changeBg && css`
        background: linear-gradient(to top, blue, 30%, purple);
    `}
    :hover {
        box-shadow: 0 16px 32px 0 rgba(0,0,0,0.2);
        cursor: pointer;
    }
`;

export const MonsterName = styled.div`
    font-size: 24px;
    padding: 10px 0;
    color: #793F06;
    ${props => props.email && css`
        font-size: 18px;
        font-style: italic;
        color: #ECEC0D;
    `}
`
