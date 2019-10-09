import PostsActionsTypes from './posts.types';

export const fetchPostsStart = (userId) => {
    return {
        type: PostsActionsTypes.FETCH_POSTS_START,
        payload: userId
    }
}

export const fetchPostsSuccess = (posts) => ({
    type: PostsActionsTypes.FETCH_POSTS_SUCCESS,
    payload: posts
})

export const fetchPostsFailure = (error) => ({
    type: PostsActionsTypes.FETCH_POSTS_FAILURE,
    payload: error
})

export const updatePosts = (posts) => ({
    type: PostsActionsTypes.UPDATE_POSTS,
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