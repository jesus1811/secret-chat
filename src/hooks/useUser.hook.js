import { useState } from "react";
import { useRouter } from "next/router";
import { app, createUserService } from "@/services";
import {
  signInWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/store/userSlice";

export const useUser = () => {
  const user = useSelector((state) => state.user.value);
  const [messageLogin, setMessageLogin] = useState({ isActive: false, message: "" });
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogin = async (email, password) => {
    try {
      const response = await signInWithEmailAndPassword(getAuth(app), email, password);
      dispatch(loginUser(response.user));
      setMessageLogin({ ...messageLogin, isActive: false, message: "" });
      router.push("/");
    } catch (err) {
      console.log(err);
      setMessageLogin({ ...messageLogin, isActive: true, message: "Correo y/o contraseña incorrecta" });
    }
  };
  const handleGoogle = async () => {
    try {
      const googleAuth = new GoogleAuthProvider();
      const response = await signInWithPopup(getAuth(app), googleAuth);
      await createUserService(response.user.uid, response.user.displayName, response.user.photoURL);
      dispatch(loginUser(response.user));
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleRegister = async (nombre, email, password) => {
    try {
      const response = await createUserWithEmailAndPassword(getAuth(app), email, password);
      const data = await createUserService(response.user.uid, nombre, "/icon-secret-chat.svg");
      setMessageLogin({ ...messageLogin, isActive: true, message: data });
    } catch (err) {
      console.log(err);
      alert(JSON.stringify(err));
    }
  };
  return {
    handleLogin,
    messageLogin,
    handleGoogle,
    handleRegister,
    user,
  };
};
