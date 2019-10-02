import CommentsActionsTypes from './comments.types';

export const setCommentsList = (comments) => ({
    type: CommentsActionsTypes.SET_COMMENTS_LIST,
    payload: comments
})
