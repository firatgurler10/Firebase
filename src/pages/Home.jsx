import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";

function Home() {
  const [user, setUser] = useState("");
  useEffect(() => {
    onAuthStateChanged(auth, (userCredential) => {
      if (userCredential) {
        setUser(userCredential.email);
      }
    });
  }, []);
  return <div style={{ margin: "10px", fontSize: "25px" }}>Merhaba {user}</div>;
}

export default Home;
