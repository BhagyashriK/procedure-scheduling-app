import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

type T = Window &
  typeof globalThis & {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
  };

const w = window as T;

export default function configureStore(initialState?: object) {
  const composeEnhancers = w.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
}
