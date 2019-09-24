import MonstersActionsTypes from './monsters.types';

export const setMonsterList = (monsters) => ({
    type: MonstersActionsTypes.SET_MONSTER_LIST,
    payload: monsters
})

export const setSearchKey = (searchKey) => ({
    type: MonstersActionsTypes.SET_SEARCH_KEY,
    payload: searchKey
})