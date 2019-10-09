import SearchActionsTypes from './search.types';

export const setSearchKey = (searchKey) => ({
    type: SearchActionsTypes.SET_SEARCH_KEY,
    payload: searchKey
})