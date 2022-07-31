import { useState } from "react";
import { useRouter } from "next/router";
import { app } from "@/services";
import { signInWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/store/userSlice";

export const useUser = () => {
  const user = useSelector((state) => state.user.value);
  const [messageLogin, setMessageLogin] = useState({ isActive: false, message: "" });
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogin = async (email, password) => {
    try {
      await signInWithEmailAndPassword(getAuth(app), email, password).then(({ user }) => {
        dispatch(loginUser(user));
      });
      setMessageLogin({ ...messageLogin, isActive: false, message: "" });
      router.push("/");
    } catch (err) {
      console.log(err);
      setMessageLogin({ ...messageLogin, isActive: true, message: "Correo y/o contraseña incorrecta" });
    }
  };
  const handleGoogle = async () => {
    const googleAuth = new GoogleAuthProvider();
    await signInWithPopup(getAuth(app), googleAuth).then(({ user }) => {
      dispatch(loginUser(user));
    });
  };
  return {
    handleLogin,
    messageLogin,
    handleGoogle,
    user,
  };
};
