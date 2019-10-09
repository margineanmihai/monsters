import MonstersActionsTypes from './monsters.types';
import {call, put, takeLatest} from "redux-saga/effects";
import {fetchMonstersSuccess, fetchMonstersFailure} from "./monsters.actions";

export function* fetchMonstersAsync() {
    const fetchMonsters = () => fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json()
      })
  
    try {
      const monsters = yield call(fetchMonsters);
      yield put(fetchMonstersSuccess(monsters));
    } catch (error) {
      yield put(fetchMonstersFailure(error));
    }
}
  
export function* onFetchMonstersStart() {
    yield takeLatest(MonstersActionsTypes.FETCH_MONSTERS_START, fetchMonstersAsync);
}
 