import CommentsActionsTypes from './comments.types';

const INITIAL_STATE = {
    commentsList: [],
}
const commentReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case CommentsActionsTypes.SET_COMMENTS_LIST:
            return {
                ...state,
                commentsList: action.payload
            }
        default: 
            return state;
    }
}

export default commentReducer;