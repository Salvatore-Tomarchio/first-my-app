import React, { useState } from "react";
import fantasy from "../data/fantasy.json";
import { Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

const AllTheBooks = ({ searchQuery, token }) => {
  const [selectedAsin, setSelectedAsin] = useState(null);

  return (
    <Row className="g-3 mt-3">
      <Col md={8}>
        <Row className="g-3">
          {fantasy
            .filter((b) =>
              b.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((book) => (
              <Col xs={12} md={6} lg={4} key={book.asin}>
                <SingleBook
                  book={book}
                  selectedAsin={selectedAsin}
                  setSelectedAsin={setSelectedAsin}
                />
              </Col>
            ))}
        </Row>
      </Col>

      <Col md={4}>
        <CommentArea selectedAsin={selectedAsin} token={token} />
      </Col>
    </Row>
  );
};

export default AllTheBooks;