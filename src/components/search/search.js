import React from 'react';

export const Search = ({handleChange, placeholder}) => {
    // const handleChange = props.handleChange;
    // const {handleChange} = props;
    return <input type="search" placeholder={placeholder} onChange={handleChange} />
}