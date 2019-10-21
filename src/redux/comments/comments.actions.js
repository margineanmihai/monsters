import CommentsActionsTypes from './comments.types';

export const setCommentsList = (comments) => ({
    type: CommentsActionsTypes.SET_COMMENTS_LIST,
    payload: comments
})

export const fetchCommentsStart = (postId) => {
    return {
        type: CommentsActionsTypes.FETCH_COMMENTS_START,
        payload: postId
    }
}

export const fetchCommentsSuccess = (comments) => ({
    type: CommentsActionsTypes.FETCH_COMMENTS_SUCCESS,
    payload: comments
})

export const fetchCommentsFailure = (error) => ({
    type: CommentsActionsTypes.FETCH_COMMENTS_FAILURE,
    payload: error
})
