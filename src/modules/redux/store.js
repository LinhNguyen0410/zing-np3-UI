import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import staticReducers from "./staticReducers";

const sagaMiddleware = createSagaMiddleware();
const STATIC_ROOT_SAGA = "____root";
// sagas manager
const createSagaInjector = (runSaga, rootSaga) => {
  let RunningSagas = {};

  const isInjected = (key) => RunningSagas[key];

  const injectSagas = (sagas) => {
    sagas.forEach(({ key, saga }) => {
      if (!isInjected(key)) {
        const task = runSaga(saga);
        RunningSagas[key] = task;
      }
    });

    console.log("RunningSagas", RunningSagas);
  };

  const ejectSagas = (keys) => {
    let ejectingKeys = keys;
    if (!keys) {
      ejectingKeys = Object.keys(RunningSagas).filter((key) => key !== STATIC_ROOT_SAGA);
    }

    ejectingKeys.forEach((key) => {
      const task = RunningSagas[key];
      if (task.isRunning()) {
        task.cancel();
        delete RunningSagas[key];
      }
    });
  };
  if (rootSaga) {
    injectSagas([{ key: STATIC_ROOT_SAGA, saga: rootSaga }]);
  }
  return { ejectSagas, injectSagas };
};
// reducer manager
const createReducer = (dynamicReducers = {}) =>
  combineReducers({
    ...staticReducers,
    ...dynamicReducers,
  });

const initStore = (initialState) => {
  // const middlewares = [loggerMiddleware, thunkMiddleware]
  // const middlewareEnhancer = applyMiddleware(sagaMiddleware)

  // const enhancers = [middlewareEnhancer]
  const composedEnhancers = composeWithDevTools(applyMiddleware(sagaMiddleware));

  const store = createStore(createReducer(), composedEnhancers);

  let DynamicReducers = {};

  const injectReducers = (injectingReducers = []) => {
    injectingReducers.forEach((item) => {
      if (!Object.keys(DynamicReducers).includes(item.key)) {
        DynamicReducers[item.key] = item.reducer;
      }
    });
    store.replaceReducer(createReducer(DynamicReducers));
  };

  const ejectReducers = (keys) => {
    if (!keys) {
      DynamicReducers = {};
    } else {
      keys.forEach((key) => delete DynamicReducers[key]);
    }
    store.replaceReducer(createReducer(DynamicReducers));
  };

  store.reducerManager = { injectReducers, ejectReducers };
  store.sagaManager = createSagaInjector(sagaMiddleware.run, null);
  return store;
};

const store = initStore({});
console.log(store);

export default store;
