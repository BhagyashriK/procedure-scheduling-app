import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

import { ThemeProvider } from "./utilities/styled";

import App from "./App";
import { theme } from "../src/styles/theme";
import configureStore from "./store/configureStore";
import ErrorBoundary from "./views/components/error-boundary/erro-boundary.index";

//  redux store configuration
const store = configureStore();

/***
 * theme: common theme
 * store: redux store
 * ErrorBoundary: handled dom curruption issues
 */
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
