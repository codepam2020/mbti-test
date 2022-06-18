import { createStore, combineReducers } from "redux";
import { PageNum } from "./page_num_reducer";

const reducers = combineReducers({ page_num: PageNum });

const store = createStore(reducers);

export default store;
