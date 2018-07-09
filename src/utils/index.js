const LOGIN_STORAGE = window.localStorage;

export function getLocalStorageItems() {
  // get all the information we have for login in the localStorage
  const props = Object.getOwnPropertyNames(LOGIN_STORAGE);
  const profileInfos = {};

  props.forEach(prop => {
    profileInfos[prop] = LOGIN_STORAGE.getItem(prop);
  });

  return profileInfos;
}

export function handleSuccessfullLogin(googleAuthResponse) {
  const { profileObj } = googleAuthResponse;
  const { name, email } = profileObj;

  // the whitelisted email, which are allowed to log in
  const whitelist = process.env.REACT_APP_WHITELIST.split(',');
  // const whitelist = ['lukas.hoepfner@zlyde.com'];
  // is the user who wants to login whitelisted?
  const userIsWhitelisted = whitelist.indexOf(email) !== -1;

  if (!userIsWhitelisted) return false; // if the user is not whitelisted, return false

  // if the user is whitelisted, set items to localStorage ...
  LOGIN_STORAGE.setItem('name', name);
  LOGIN_STORAGE.setItem('email', email);

  // ...and return true
  return true;
}

export function handleFailureLogin(googleAuthResponse) {
  console.log(`failed google login. Got a response: ${googleAuthResponse}`); // eslint-disable-line no-console
  LOGIN_STORAGE.clear();
}

export default {
  getLocalStorageItems
};
