// store.js
import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import persistedReducer from "./reducers";

const middlewares = []; // If you have middlewares, add them here

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

if (module.hot) {
  module.hot.accept("./reducers", () => {
    const nextRootReducer = require("./reducers").default;
    store.replaceReducer(nextRootReducer);
  });
}

const persister = persistStore(store);

export { store, persister };
