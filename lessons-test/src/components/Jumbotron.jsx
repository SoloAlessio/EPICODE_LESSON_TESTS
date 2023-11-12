import { Carousel, Container } from "react-bootstrap";
import img1 from "../imgs/img1.jpg";
import img2 from "../imgs/img2.jpg";
import img3 from "../imgs/img3.jpg";

export default function Jumbotron() {
  return (
    <Container className="p-5 h-100">
      <Carousel className="rounded-5 overflow-hidden">
        <Carousel.Item>
          <img
            style={{ maxHeight: "50vh", objectFit: "cover" }}
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First Slider Image Title</h3>
            <p>First Slide decription.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ maxHeight: "50vh", objectFit: "cover" }}
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide Image </h3>
            <p>Second slide description</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ maxHeight: "50vh", objectFit: "cover" }}
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third Slide Image</h3>
            <p>Third Slide Description.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}
