import { createStore, combineReducers } from "redux";
import { PageNum } from "./page_num_reducer";
import { TestResultReducer } from "./test_result_reducer";

const reducers = combineReducers({
  page_num: PageNum,
  test_result: TestResultReducer,
});

const store = createStore(reducers);

export default store;
