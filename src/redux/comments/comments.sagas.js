import CommentsActionsTypes from './comments.types';
import {call, put, takeLatest} from "redux-saga/effects";
import {fetchCommentsSuccess, fetchCommentsFailure} from "./comments.actions";

export function* fetchCommentsAsync(action) {
    const fetchComments = (id) => fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then(response => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json()
      })
  
    try {
      const comments = yield call(fetchComments, action.payload);
      yield put(fetchCommentsSuccess(comments));
    } catch (error) {
      yield put(fetchCommentsFailure(error));
    }
  }
  
export function* onFetchCommentsStart() {
    yield takeLatest(CommentsActionsTypes.FETCH_COMMENTS_START, fetchCommentsAsync);
}