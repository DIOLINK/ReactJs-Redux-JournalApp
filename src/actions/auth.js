import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { types } from '../types/types';
export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(12367, 'Adrian'));
    }, 3500);
  };
};

export const startLoginGoogle = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(
        ({
          user: {
            multiFactor: {
              user: { uid, displayName },
            },
          },
        }) => {
          dispatch(login(uid, displayName));
        }
      );
  };
};

export const login = (uid, displayName) => ({
  type: types.login,
  payload: { uid, displayName },
});
