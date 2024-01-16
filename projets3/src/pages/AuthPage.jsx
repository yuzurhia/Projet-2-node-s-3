// AuthPage.js
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import LoginComponent from "../components/LoginComponent";
import RegisterComponent from "../components/RegisterComponent";
import { Button } from "react-bootstrap";

const AuthPage = () => {
  const { token } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div>
        {isLogin ? <LoginComponent /> : <RegisterComponent />}
        <Button onClick={toggleForm} variant="primary" className="mt-3">
          {isLogin ? "S'inscrire" : "Se connecter"}
        </Button>
      </div>
    </div>
  );
};

export default AuthPage;
