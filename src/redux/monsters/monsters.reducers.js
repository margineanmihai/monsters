import MonstersActionsTypes from './monsters.types';

const INITIAL_STATE = {
    monsterList: [],
    error: null,
}
const monsterReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case  MonstersActionsTypes.SET_MONSTER_LIST:
            return {
                ...state,
                monsterList: action.payload
            }
        case  MonstersActionsTypes.FETCH_MONSTERS_START:
            return {
                ...state
            }
        case  MonstersActionsTypes.FETCH_MONSTERS_SUCCESS:
            return {
                ...state,
                monsterList: action.payload
            }
        case  MonstersActionsTypes.FETCH_MONSTERS_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default: 
            return state;
    }
}

export default monsterReducer;