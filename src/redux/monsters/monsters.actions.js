import MonstersActionsTypes from './monsters.types';

export const fetchMonstersStart = () => ({
    type: MonstersActionsTypes.FETCH_MONSTERS_START
})

export const fetchMonstersSuccess = (monsters) => ({
    type: MonstersActionsTypes.FETCH_MONSTERS_SUCCESS,
    payload: monsters
})

export const fetchMonstersFailure = (error) => ({
    type: MonstersActionsTypes.FETCH_MONSTERS_FAILURE,
    payload: error
})

//todo - move search
export const setSearchKey = (searchKey) => ({
    type: MonstersActionsTypes.SET_SEARCH_KEY,
    payload: searchKey
})