import React, { createContext, useState } from "react";
import app from "../Firebase/Firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { toast } from "react-hot-toast";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signUp = async (email, password, profile) => {
    setLoading(true);
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        // await sendEmailVerification(auth.currentUser);
      })
      .catch((err) => console.log(err));
    await updateProfile(auth.currentUser, profile);
    const username = auth.currentUser;
    setUser({ ...username });
    toast.success("User successfully created");
    return username;
  };
  const authInfo = { user, loading, signUp };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
