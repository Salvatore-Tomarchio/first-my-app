
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const SingleBook = ({ book, selectedAsin, setSelectedAsin }) => {
  const navigate = useNavigate();
  const isSelected = selectedAsin === book.asin;

  const handleSelect = () => {
    setSelectedAsin(book.asin);
  };

  const handleNavigate = (e) => {
    e.stopPropagation(); // evita trigger del click sulla card
    navigate(`/details/${book.asin}`);
  };

  return (
    <Card
      onClick={handleSelect}
      style={{
        cursor: "pointer",
        border: isSelected ? "3px solid red" : "none",
        height: "100%",
      }}
      data-testid="single-book"
    >
      <Card.Img
        variant="top"
        src={book.img}
        style={{ height: "300px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Button variant="info" onClick={handleNavigate}>
          Dettagli
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;