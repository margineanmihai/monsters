import PostsActionsTypes from './posts.types';
import {call, put, takeLatest} from "redux-saga/effects";
import {fetchPostsSuccess, fetchPostsFailure} from "./posts.actions";

export function* fetchPostsAsync(action) {
    const fetchPosts = (id) => fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then(response => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json()
      })
  
    try {
      const posts = yield call(fetchPosts, action.payload);
      yield put(fetchPostsSuccess(posts));
    } catch (error) {
      yield put(fetchPostsFailure(error));
    }
  }
  
export function* onFetchPostsStart() {
    yield takeLatest(PostsActionsTypes.FETCH_POSTS_START, fetchPostsAsync);
}