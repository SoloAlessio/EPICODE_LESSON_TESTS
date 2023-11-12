import { React } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MuiCard from "./Card";

export default function CardSlider() {
  return (
    <Container>
      <Row className="g-4 m-3">
        <Col md={3}>
          <MuiCard
            title={"Yosemite National Park"}
            date={"21 Apr 2024"}
            img={
              "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
            }
            price={"2,900"}
          />
        </Col>
        <Col md={3}>
          <MuiCard
            title={"Venice San Marco"}
            date={"25 May 2024"}
            img={
              "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            price={"3,400"}
          />
        </Col>
        <Col md={3}>
          <MuiCard
            title={"Paris Tour Eiffel"}
            date={"18 Nov 2023"}
            img={
              "https://images.unsplash.com/photo-1431274172761-fca41d930114?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            price={"2,000"}
          />
        </Col>
        <Col md={3}>
          <MuiCard
            title={"Munich in my camp"}
            date={"13 Apr 1942"}
            img={
              "https://images.unsplash.com/photo-1577462282244-b58c2816d686?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            price={"0"}
          />
        </Col>
      </Row>
    </Container>
  );
}
