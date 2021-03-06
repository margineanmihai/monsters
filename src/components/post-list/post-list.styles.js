import styled from 'styled-components';
export const Button = styled.button`
  background: green;
  border-radius: 3px;
  border: 2px solid yellow;
  color: yellow;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-weight: bold;
  :hover {
    background: linear-gradient(to top, green, 30%, #d5ff6c);
    box-shadow: 0 16px 32px 0 rgba(0,0,0,0.2);
    cursor: pointer;
    }
`

export const Input = styled.input`
    width:400px;
`

export const Textarea = styled.textarea`
    width:400px;
`