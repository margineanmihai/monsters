import PostsActionsTypes from './posts.types';

const INITIAL_STATE = {
    postsList: [],
}
const postReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case PostsActionsTypes.SET_POSTS_LIST:
            return {
                ...state,
                postsList: action.payload
            }
        case PostsActionsTypes.DELETE_POST:
            const newPostsList = state.postsList.filter((post) => action.payload !== post.id);

            return {
                ...state,
                postsList: newPostsList
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