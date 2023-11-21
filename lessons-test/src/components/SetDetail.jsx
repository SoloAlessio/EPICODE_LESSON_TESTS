import { useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function SetDetail() {
  const key = "a6d4881a-88bc-4204-b41e-bfe3d552cff2";
  const { setsId } = useParams();
  const [data, setData] = useState([]);
  const [searchQuery, setSearchquery] = useState("");

  useEffect(() => {
    fetch("https://api.pokemontcg.io/v2/cards", {
      method: "GET",
      "X-Api-Key": key,
    })
      .then((r) => r.json())
      .then((d) => d.data)
      .then(setData);
  }, [setsId]);

  console.log(data.length);

  return (
    <Container className="p-5 h-100">
      <Form className="mb-3">
        <Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Control
              type="email"
              placeholder="Search..."
              onInput={(e) => setSearchquery(e.target.value)}
            />
          </Form.Group>
        </Row>
      </Form>

      <Row className="g-4">
        {data ? (
          data
            .filter((e) => e.set.id.toLowerCase().includes(setsId))
            .map((element) => (
              <Col md={4} lg={3}>
                <p>{element.name}</p>
              </Col>
            ))
        ) : (
          <p>Loading...</p>
        )}
      </Row>
    </Container>
  );
}
