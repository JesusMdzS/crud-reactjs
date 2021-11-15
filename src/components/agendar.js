// import Button from "@restart/ui/esm/Button";
import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./styles/agendar.css";
import { Link } from "react-router-dom";
import swal from "sweetalert";

class Agendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      namePatient: "",
      date: "",
      hour: "",
      subject: "",
    };
  }
  cambioValor = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState({ state });
  };
  enviarDatos = (e) => {
    e.preventDefault();
    console.log("Formulario fue enviado...");
    const { email, namePatient, date, hour, subject } = this.state;
    console.log(email);
    console.log(namePatient);
    console.log(date);
    console.log(hour);
    console.log(subject);

    var datosEnviar = {
      email: email,
      namePatient: namePatient,
      date: date,
      hour: hour,
      subject: subject,
    };

    fetch("http://localhost/API/?insert=1", {
      method: "POST",
      body: JSON.stringify(datosEnviar),
    })
      .then((respuesta) => respuesta.json())
      .then((datosRespuesta) => {
        console.log(datosRespuesta);
        console.log(datosEnviar);
        swal({
          title: "Bien!",
          text: "Has sido agregado con exito!",
          type: "success",
        }).then(function () {
          window.location = "/dashboard";
        });
      })
      .catch(console.log());
  };

  render() {
    const { email, namePatient, date, hour, subject } = this.state;
    return (
      <>
        <div className="header-div">
          <h1 className="header-text">Agrega tus datos para agendar tu cita</h1>
        </div>
        <div className="all">
          <Container>
            <Row>
              <Col>
                <Form onSubmit={this.enviarDatos}>
                  <Form.Group className="mb-3">
                    <Form.Label>Ingresa tu nombre</Form.Label>
                    <Form.Control
                      type="text"
                      name="namePatient"
                      value={namePatient}
                      onChange={this.cambioValor}
                      required
                    />
                    <Form.Label>Ingresa tu correo</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={email}
                      onChange={this.cambioValor}
                      required
                    />
                    <Form.Label>Ingresa el dia de tu cita</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="dia"
                      id="date"
                      name="date"
                      value={date}
                      onChange={this.cambioValor}
                      required
                    ></Form.Control>
                    <Form.Label>Ingresa la hora</Form.Label>
                    <Form.Control
                      type="time"
                      placeholder="hora"
                      id="hour"
                      name="hour"
                      value={hour}
                      onChange={this.cambioValor}
                      required
                    ></Form.Control>
                    <Form.Label>Ingresa un asunto de tu cita</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="asunto"
                      id="subject"
                      name="subject"
                      value={subject}
                      onChange={this.cambioValor}
                      required
                    ></Form.Control>
                  </Form.Group>
                  <Button variant="secondary" type="submit" size="">
                    Agregar
                  </Button>

                  <Link to="/dashboard">
                    <Button variant="primary" type="submit">
                      Cancelar
                    </Button>
                  </Link>
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
      </>
    );
  }
}

export default Agendar;
