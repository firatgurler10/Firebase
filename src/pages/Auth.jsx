import React, { useState } from "react";
import "../css/Auth.css";
import { FaGoogle } from "react-icons/fa";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";

const provider = new GoogleAuthProvider();

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginWithGoogle = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      const user = response.user;
      if (user) {
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const login = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const user = response.user;
      if (user) {
        navigate("/");
      }
    } catch (error) {
      toast.error("Giriş yapılamadı" + error.message);
    }
  };

  const register = async () => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = response.user;
      if (user) {
        toast.success("Kullanıcı Oluşturuldu");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="auth">
      <h3 className="auth-header">Giriş Yap/Kaydol</h3>
      <div className="input-div">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="E-mail giriniz."
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Şifre giriniz."
        />
      </div>
      <div>
        <button onClick={loginWithGoogle} className="google-button">
          <FaGoogle className="google-icon" />
          Google ile Giriş Yap
        </button>
        <button onClick={login} className="login-button">
          Giriş Yap
        </button>
        <button onClick={register} className="register-button">
          Kaydol
        </button>
      </div>
    </div>
  );
}

export default Auth;
