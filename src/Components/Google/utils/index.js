const LOGIN_STORAGE = window.localStorage;

export function onSuccessfulLogin(googleAuthResponse) {
  const { profileObj } = googleAuthResponse;
  const { name, email } = profileObj; // e.g. "Lukas Höpfner"

  LOGIN_STORAGE.setItem('name', name);
  LOGIN_STORAGE.setItem('email', email);
  LOGIN_STORAGE.setItem('isAuthorized', true);
}

export function onFailureLogin() {
  LOGIN_STORAGE.clear();
}

export default {
  onSuccessfulLogin,
  onFailureLogin
};
