import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function cardProduct({ name, category, materials }) {
  return (
    <Card style={{ width: "18rem" }}>
      {/* Vous pouvez remplacer l'URL par celle correspondant à l'image du meuble */}
      <Card.Img variant="top" src="placeholder.jpg" alt={`Image of ${name}`} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Category:</strong> {category}
          <br />
          <strong>Materials:</strong> {materials.join(", ")}
        </Card.Text>
        <Button variant="primary">View Details</Button>
      </Card.Body>
    </Card>
  );
}

export default cardProduct;
