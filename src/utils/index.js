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
  const { name, email } = profileObj; // e.g. "Lukas Höpfner"

  LOGIN_STORAGE.setItem('name', name);
  LOGIN_STORAGE.setItem('email', email);
}

export function handleFailureLogin(googleAuthResponse) {
  console.log(`failed google login. Got a response: ${googleAuthResponse}`); // eslint-disable-line no-console
  LOGIN_STORAGE.clear();
}

export default {
  getLocalStorageItems
};
