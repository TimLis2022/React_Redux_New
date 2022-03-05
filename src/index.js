import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Page from "./features/counter/Page";
import store from "./store/store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <Page />
  </Provider>,
  rootElement
);
