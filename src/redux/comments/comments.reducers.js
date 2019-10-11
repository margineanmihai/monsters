import CommentsActionsTypes from './comments.types';

const INITIAL_STATE = {
    commentsList: [],
    error: null
}
const commentReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case  CommentsActionsTypes.FETCH_COMMENTS_START:
        return {
            ...state
        }
        case  CommentsActionsTypes.FETCH_COMMENTS_SUCCESS:
            return {
                ...state,
                commentsList: action.payload
            }
        case  CommentsActionsTypes.FETCH_COMMENTS_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default: 
            return state;
    }
}

export default commentReducer;