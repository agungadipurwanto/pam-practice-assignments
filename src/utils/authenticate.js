import firebase from "./firebase";

export const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

export const signInWithEmailPassword = (email, password, setError) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {})
    .catch((error) =>
      setError({
        code: error.code,
        message: error.message,
      })
    );
};

export const signOut = () => {
  firebase.auth().signOut();
};

export const signUpWithEmailPassword = (email, password, setError) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {})
    .catch((error) =>
      setError({
        code: error.code,
        message: error.message,
      })
    );
};

export const getAuthState = (setUserAuthentication) => {
  return firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUserAuthentication({
        user,
        isAuthenticated: true,
        loading: false,
      });
    } else {
      setUserAuthentication({
        user: null,
        isAuthenticated: false,
        loading: false,
      });
    }
  });
};
