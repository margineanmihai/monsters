import React from 'react';
import {SearchInput} from './search.styles';

export const Search = ({handleChange, placeholder}) => {
    return <SearchInput type="search" placeholder={placeholder} onChange={handleChange} />
}