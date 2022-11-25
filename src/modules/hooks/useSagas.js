import store from "modules/redux/store";
import { useEffect } from "react";

export const useSagas = (sagas) => {
  useEffect(() => {
    store.sagaManager.injectSagas(sagas);
    return () => {
      const keys = sagas.map((item) => item.key);
      store.sagaManager.ejectSagas(keys);
    };
  }, []);
};
