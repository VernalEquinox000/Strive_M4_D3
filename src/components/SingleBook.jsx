import React, { Component } from "react";
import { Container, Col, Card, Button } from "react-bootstrap";

class SingleBook extends Component {
  render() {
    return (
      <Col xs={6}>
        <Card style={{ width: "18rem" }} key={book.asin}>
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button
              variant="primary"
              /* onClick={() => this.selectNewBook(HorrorBook)} */
            >
              Change book
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
