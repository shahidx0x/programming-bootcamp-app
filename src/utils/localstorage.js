// localStorageHelper.js

const TOKEN_KEY = "authToken";

export function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function deleteToken() {
  localStorage.removeItem(TOKEN_KEY);
}

export function hasToken() {
  return localStorage.getItem(TOKEN_KEY) !== null;
}
