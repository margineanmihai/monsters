import SearchActionsTypes from './search.types';

const INITIAL_STATE = {
    searchKey: ''
}

const searchReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case SearchActionsTypes.SET_SEARCH_KEY:
            return {
                ...state,
                searchKey: action.payload
            }
        default: 
            return state; 
    }
}

export default searchReducer;