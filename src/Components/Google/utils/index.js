const LOGIN_STORAGE = window.localStorage;

// use this function as callback when the user successfully logged in
export function onSuccessfulLogin(googleAuthResponse) {
  const { profileObj } = googleAuthResponse;
  const { name, email } = profileObj; // e.g. "Lukas Höpfner"

  LOGIN_STORAGE.setItem('name', name);
  LOGIN_STORAGE.setItem('email', email);

  window.location.reload();
}

// use this function as callback when the google login failed
export function onFailureLogin() {
  LOGIN_STORAGE.clear();
}

export default {
  onSuccessfulLogin,
  onFailureLogin
};
