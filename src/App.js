import React from "react";
import Main from "./screens/main";
import { Provider } from "react-redux";
import store from "./reducers/store";

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Main />
      </div>
    </Provider>
  );
}
