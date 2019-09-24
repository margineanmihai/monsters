import {combineReducers} from "redux";
import monsterReducer from "./monsters/monsters.reducers";

export default combineReducers({
    monsters: monsterReducer
})