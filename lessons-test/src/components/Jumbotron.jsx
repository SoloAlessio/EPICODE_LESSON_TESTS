import { Container, Row, Col, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { grid } from "ldrs";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";

export default function Jumbotron() {
  grid.register();
  const key = "a6d4881a-88bc-4204-b41e-bfe3d552cff2";
  const [players, setPlayers] = useState([]);
  const [date, setDate] = useState("");
  const [searchQuery, setSearchquery] = useState("");

  useEffect(() => {
    setDate(new Date().toLocaleString());
  }, [date]);

  useEffect(() => {
    fetch("https://api.pokemontcg.io/v2/cards", {
      method: "GET",
      "X-Api-Key": key,
    })
      .then((r) => r.json())
      .then((d) => setPlayers(d.data));
  }, []);

  return (
    <Container className="p-5 h-100">
      <p className="fw-semibold text-center">{date}</p>
      <Form className="mb-5">
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
        {players.length ? (
          players
            .filter((e) => e.name.toLowerCase().includes(searchQuery))
            .map(
              (char) =>
                char && (
                  <Col md={4} lg={2} key={char.id}>
                    <Card variant="outlined">
                      <CardOverflow
                        className="px-0 overflow-hidden"
                        sx={{ maxHeight: "100%" }}
                      >
                        <img
                          src={char.images.large}
                          loading="lazy"
                          alt={char.name}
                        />
                      </CardOverflow>
                      <CardContent>
                        <Typography level="title-md">{char.name}</Typography>
                        <Typography level="body-sm" noWrap>
                          {char.set.name}
                        </Typography>
                      </CardContent>
                      <CardOverflow
                        variant="soft"
                        sx={{ bgcolor: "background.level1" }}
                      >
                        <Divider inset="context" />
                        <CardContent
                          orientation="horizontal"
                          className="justify-content-between align-items-center"
                        >
                          <Typography
                            level="body-xs"
                            fontWeight="md"
                            textColor="text.secondary"
                          >
                            {char.cardmarket
                              ? "$ " + char.cardmarket.prices.averageSellPrice
                              : ""}
                          </Typography>
                          <Divider orientation="vertical" />
                          <Button variant="outlined">
                            <Link
                              to={`/card/${char.id}`}
                              className="text-decoration-none"
                              style={{ color: "unset" }}
                            >
                              Detail
                            </Link>
                          </Button>
                        </CardContent>
                      </CardOverflow>
                    </Card>
                  </Col>
                )
            )
        ) : (
          // Default values shown
          <l-grid size="60" speed="1.5" color="black"></l-grid>
        )}
      </Row>
    </Container>
  );
}
