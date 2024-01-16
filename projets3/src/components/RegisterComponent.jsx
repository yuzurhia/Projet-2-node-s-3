// RegisterComponent.js
import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";

const RegisterComponent = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    // Simulez ici l'appel à l'API pour l'inscription
    // Remplacez ce code simulé par votre logique d'API réelle
    const response = await fetch("votre-api-d-inscription", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      login(data.token);
    } else {
      // Gérer les erreurs d'inscription
      console.error("Erreur d'inscription");
    }
  };

  return (
    <div>
      <h2>Inscription</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Nom d'utilisateur:</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mot de passe:</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleRegister}>
          S'inscrire
        </Button>
      </Form>
    </div>
  );
};

export default RegisterComponent;
