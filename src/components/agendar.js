// import Button from "@restart/ui/esm/Button";
import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./styles/agendar.css";

class Agendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="all">
        <Container>
          <Row>
            <Col>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Ingresa tu nombre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="name"
                    required
                  ></Form.Control>
                  <Form.Label>Selecciona un médico</Form.Label>
                  <Form.Select aria-label="Default select example" required>
                    <option value="1">Samuel L.</option>
                    <option value="2">Victor Andrade</option>
                    <option value="3">René Santos</option>
                  </Form.Select>
                  <Form.Label>Ingresa el dia de tu cita</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="dia"
                    required
                  ></Form.Control>
                  <Form.Label>Ingresa la hora</Form.Label>
                  <Form.Control
                    type="time"
                    placeholder="hora"
                    required
                  ></Form.Control>
                  <Form.Label>Ingresa un asunto de tu cita</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="asunto"
                    required
                  ></Form.Control>
                </Form.Group>
                <Button variant="secondary" type="submit">
                  Agregar
                </Button>
              </Form>
            </Col>
            <Col>
              {" "}
              <img
                className="patient-img2"
                src="./img/paciente.jpg"
                alt="patient"
              ></img>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Agendar;
