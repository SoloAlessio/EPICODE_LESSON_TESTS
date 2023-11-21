import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function CardDetail() {
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://api.pokemontcg.io/v2/cards/" + id, {
      method: "GET",
    })
      .then((r) => r.json())
      .then((d) => d.data)
      .then(setData);
  }, [id]);

  return (
    <Container className="my-5">
      {data && (
        <Row>
          <Col md={4}>
            <img src={data.images.large} alt="" className="img-fluid shadow" />
          </Col>
          <Col md={8} className="d-flex flex-column justify-content-between">
            <div>
              <div id="info">
                <p className="fw-semibold fs-2 mb-0">{data.name}</p>
                <hr />
                <span className="pe-2">{data.category}</span>
                <span className="pe-2">{data.rarity}</span>
              </div>
            </div>
            <p className="">illustrated by {data.illustrator}</p>
          </Col>
        </Row>
      )}
    </Container>
  );
}
