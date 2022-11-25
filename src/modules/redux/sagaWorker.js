import { apiCall } from "modules/api";
import { call, put } from "redux-saga/effects";

export default function* workerSaga(url, method, payload, options, action) {
  const { type } = action;

  const { code, data, errors } = yield call(apiCall, url, method, payload, options);
  if (code === 0) {
    yield put({ type: `${type}_SUCCESS`, payload: data });
  } else {
    yield put({ type: `${type}_FAILED`, message: errors });
  }
}
