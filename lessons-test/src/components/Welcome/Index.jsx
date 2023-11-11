import { React } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import BookMark from "./bookMark/bookMark";

export default function Welcome() {
  return (
    <Container>
      <Row className="g-4 m-3">
        <Col md={6}>
          <Card>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Text>
                Some quick example text to build the card out and make up the
                bulk of the card's content.
              </Card.Text>
              <BookMark />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <div className="bg-light p-5 rounded-lg">
            <h1 className="display-4">Hello, world!</h1>
            <p className="lead">
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <hr className="my-4" />
            <p>
              It uses utility classes for typography and spacing to space
              content out within the larger container.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
