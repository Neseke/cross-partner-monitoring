const LOGIN_STORAGE = window.localStorage;

export default function getLocalStorageItems() {
  // get all the information we have for login in the localStorage
  const props = Object.getOwnPropertyNames(LOGIN_STORAGE);
  const profileInfos = {};

  props.forEach(prop => {
    profileInfos[prop] = LOGIN_STORAGE.getItem(prop);
  });

  return profileInfos;
}
