import {all, call} from "redux-saga/effects";
import {onFetchMonstersStart} from "./monsters/monsters.sagas";
import {onFetchPostsStart} from "./posts/posts.sagas"
import {onFetchCommentsStart} from "./comments/comments.sagas"

export default function* rootSaga() {
    yield all(
        [
            call(onFetchMonstersStart),
            call(onFetchPostsStart),
            call(onFetchCommentsStart),
        ]
    );
}