import {all, call} from "redux-saga/effects";
import {onFetchMonstersStart} from "./monsters/monsters.sagas";
import {onFetchPostsStart} from "./posts/posts.sagas"

export default function* rootSaga() {
    yield all(
        [
            call(onFetchMonstersStart),
            call(onFetchPostsStart)
        ]
    );
}