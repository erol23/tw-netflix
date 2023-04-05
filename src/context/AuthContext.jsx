import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { setDoc, doc, updateDoc, arrayUnion } from "firebase/firestore";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setDoc(doc(db, "users", email), {
          favoriteMovies: [],
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  function likedMovie(favMovie) {
    updateDoc(doc(db, "users", `${user?.email}`), {
      favoriteMovies: arrayUnion(favMovie),
    })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  });

  const values = {
    signUp,
    logIn,
    logOut,
    likedMovie,
    user,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

export function UserAuth() {
  return useContext(AuthContext);
}
