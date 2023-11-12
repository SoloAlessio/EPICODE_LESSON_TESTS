import { Container, Row, Col } from "react-bootstrap";
import * as Icons from "react-bootstrap-icons";

export default function Footer() {
  return (
    <Container className="page-footer pt-3 mt-5">
      <Row>
        <Col md={3}>
          <label>Company</label>
          <ul className="g-4">
            <li>About Us</li>
            <li>Blog</li>
            <li>Carrers</li>
            <li>Contact Us</li>
          </ul>
        </Col>
        <Col md={3}>
          <label>Support</label>
          <ul>
            <li>Help Center</li>
            <li>Safety Center</li>
            <li>Community Guidelines</li>
          </ul>
        </Col>
        <Col md={3}>
          <label>Legal</label>
          <ul>
            <li>Cookies Policy</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Law Enforcement</li>
          </ul>
        </Col>
        <Col md={3}>
          <label>Install App</label>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col
          xs={12}
          className="d-flex justify-content-between align-items-center"
        >
          <p className="text-small">
            © 2022 Chakra Templates. All rights reserved
          </p>
          <ul className="d-flex align-items-center social">
            <li>
              <Icons.Twitter />
            </li>
            <li>
              <Icons.Youtube />
            </li>
            <li>
              <Icons.Instagram />
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
