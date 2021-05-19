import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
//import { render } from "react-dom";
import Fantasy from "../data/fantasy.json";
import History from "../data/history.json";
import Horror from "../data/horror.json";
import Romance from "../data/romance.json";
import Scifi from "../data/scifi.json";


const LatestRelease = (props) => {
        return (
            <Container>
                <Row className="justify-content-center mt-3">
                    <Col xs={6}>
                        {props.map((prop) => (
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={prop.img}/>
                                <Card.Body>
                                    <Card.Title>{prop.title}</Card.Title>
                                    <Card.Text>
                                        <p>{prop.price} - {prop.category}</p>
    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>))}
                    </Col>
                </Row>
            </Container>
        )
    }


export default LatestRelease




