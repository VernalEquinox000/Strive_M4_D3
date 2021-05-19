import React, { Component } from "react";
import SingleBook from "./SingleBook";
import { Container, Row, Card } from "react-bootstrap";
import Horror from "../data/horror.json";

export default class BookList extends Component {
  state = {
    selectedBook: null,
  };

  selectNewBook = (book) => {
    // console.log("Dish selected", dish);
    this.setState({ selectedBook: book });
  };

  render() {
    return (
      <>
        <Container>
          <Row className="justify-content-center mt-3">
            {Horror.map((Horror) => (
              <SingleBook onClick={() => this.selectNewBook(Horror)} />
            ))}
          </Row>
        </Container>
      </>
    );
  }
}
