import PostsActionsTypes from './posts.types';

export const setPostsList = (posts) => ({
    type: PostsActionsTypes.SET_POSTS_LIST,
    payload: posts
})

export const deletePost = (id) => ({
    type: PostsActionsTypes.DELETE_POST,
    payload: id
})

export const editPost = (newPost) => ({
    type: PostsActionsTypes.EDIT_POST,
    payload: newPost
})