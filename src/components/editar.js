import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./styles/agendar.css";

function Example() {
  let { idpersona } = useParams();
  // Declaración de una variable de estado que llamaremos "state"
  const [state, setstate] = useState({
    datosCargados: false,
    persona: [],
  });

  const handleChange = (e) => {
    console.log(e);
  };

  const consultar = () => {
    fetch("http://localhost/API/?get=" + idpersona)
      .then((respuesta) => respuesta.json())
      .then((datosRespuesta) => {
        console.log(datosRespuesta);
        setstate({ datosCargados: true, persona: datosRespuesta });
      })
      .catch(console.log());
    console.log(state.persona);
  };

  useEffect(() => {
    consultar();
  }, []);

  return (
    <>
      <div className="header-div">
        <h1 className="text-head">Edita tus datos</h1>
      </div>
      <div className="all">
        <Container>
          <Row>
            <Col>
              <h1>Edita tu cita</h1>
              {state.persona.map((persona, index) => (
                <Form key={index}>
                  <Form.Group className="mb-3">
                    <Form.Label>Ingresa tu nombre</Form.Label>
                    <Form.Control
                      type="text"
                      name="namePatient"
                      value={persona.name_person}
                      onChange={handleChange}
                      required
                    />
                    <Form.Label>Ingresa tu Correo</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={persona.email}
                      required
                    />
                    <Form.Label>Ingresa el dia de tu cita</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="dia"
                      value={persona.fecha}
                      required
                    ></Form.Control>
                    <Form.Label>Ingresa la hora</Form.Label>
                    <Form.Control
                      type="time"
                      placeholder="hora"
                      value={persona.hour}
                      required
                    ></Form.Control>
                    <Form.Label>Ingresa un asunto de tu cita</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="asunto"
                      value={persona.subject}
                      required
                    ></Form.Control>
                  </Form.Group>
                  <Button variant="secondary" type="submit">
                    Guardar
                  </Button>
                </Form>
              ))}
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
    </>
  );
}
export default Example;
