import axios from "axios";
import { toJson } from "common/utils/convert";

export async function requestGetAccount() {
  try {
    const response = await axios.request({
      method: "get",
      url: "https://confused-swanky-macaroon.glitch.me/api/accounts",
    });
    return response.data;
  } catch (e) {
    return null;
  }
}

const delay = (timeout, value) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, timeout);
  });

const BASE_URL = "https://confused-swanky-macaroon.glitch.me";
const buildURL = (url) => {
  if (url.startsWith("http") || url.startsWith("https")) return url;
  return `${BASE_URL}${url}`;
};

export const Method = {
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
};

const HeadersDefault = {
  "Content-Type": "application/json",
};

export async function apiCall(url, method, payload, options = {}) {
  const { retries = 0 } = options;
  const result = { code: 0, data: null, errors: [] };
  try {
    const response = await axios({
      method: method,
      url: buildURL(url),
      responseType: "application/json",
      headers: HeadersDefault,
      data: payload,
    });
    result.data = toJson(response.data, null);
  } catch (e) {
    if (retries > 0) {
      await delay(2000);
      return await apiCall(url, method, payload, { ...options, retries: retries - 1 });
    }
    result.code = 100;
    result.errors = [e.message];
  }
  return result;
}
