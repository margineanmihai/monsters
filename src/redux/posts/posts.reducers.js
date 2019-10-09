import PostsActionsTypes from './posts.types';

const INITIAL_STATE = {
    postsList: [],
    error: null,
}
const postReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case  PostsActionsTypes.FETCH_POSTS_START:
            return {
                ...state
            }
        case  PostsActionsTypes.FETCH_POSTS_SUCCESS:
            return {
                ...state,
                postsList: action.payload
            }
        case  PostsActionsTypes.FETCH_POSTS_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case PostsActionsTypes.DELETE_POST:
            const newPostsList = state.postsList.filter((post) => action.payload !== post.id);

            return {
                ...state,
                postsList: newPostsList
            }
        case  PostsActionsTypes.UPDATE_POSTS:
            return {
                ...state,
                postsList: action.payload
            }
        case PostsActionsTypes.EDIT_POST:
            const newPost = action.payload;
            const posts = state.postsList;
            const editedPostsList = posts.map(post => post.id === newPost.id ? newPost : post);
            return {
                ...state,
                postsList: editedPostsList
            }
        default: 
            return state;
    }
}

export default postReducer;