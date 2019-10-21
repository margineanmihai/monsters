import {combineReducers} from "redux";
import monsterReducer from "./monsters/monsters.reducers";
import searchReducer from "./search/search.reducers";
import postReducer from "./posts/posts.reducers";
import commentReducer from "./comments/comments.reducers";

export default combineReducers({
    monsters: monsterReducer,
    searchKey: searchReducer,
    posts: postReducer,
    comments: commentReducer
})