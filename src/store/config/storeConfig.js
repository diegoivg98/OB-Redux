import { composeWithDevTools } from "@redux-devtools/extension";
import { rootReducer } from "../reducers/rootReducer";
import createSagaMiddleware from "@redux-saga/core";
import { configureStore, compose} from "@reduxjs/toolkit";
import { workerSaga } from "../sagas/sagas";

export const createAppStore = () => {
  let store = configureStore(
    {
      reducer: rootReducer,
    },
    composeWithDevTools()
  );

  return store;
};

export const createAppAsyncStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  let store = configureStore(
    {
      reducer: rootReducer,
    },
    compose(sagaMiddleware, composeWithDevTools())
  );

  sagaMiddleware.run(workerSaga);

  return store;
};
