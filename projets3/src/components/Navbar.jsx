import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function CustomNavbar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(process.env.APIURL + "api/categorie/getall")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Réponse réseau incorrecte");
        }
        return response.json();
      })
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des catégories :", error);
      });
  }, []);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Accueil
          </Navbar.Brand>
          <Nav className="mr-auto">
            <NavDropdown title="Catégories" id="basic-nav-dropdown">
              {categories.map((category) => (
                <NavDropdown.Item
                  key={category.id}
                  as={Link}
                  to={`/category/${category.slug}`}
                >
                  {category.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
          <Button as={Link} to="/login" variant="outline-light">
            Se connecter
          </Button>
        </Container>
      </Navbar>

      <br />
    </>
  );
}

export default CustomNavbar;
