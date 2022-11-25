import store from "modules/redux/store";
import React, { useEffect, FC } from "react";

export const useReducers = (reducers) => {
  useEffect(() => {
    store.reducerManager.injectReducers(reducers);
    return () => {
      const keys = reducers.map((item) => item.key);
      store.reducerManager.ejectReducers(keys);
    };
  }, []);
};
