import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./styles/agendar.css";
import { Link } from "react-router-dom";
import swal from "sweetalert";

function Editar() {
  let { idpersona } = useParams();
  // Declaración de una variable de estado que llamaremos "state"
  const [state, setstate] = useState({
    persona: [],
  });

  const handleChange = (e) => {
    const estado = state.persona;
    estado[e.target.name] = e.target.value;
    setstate({ persona: estado });

    console.log(estado);
  };

  const enviarDatos = (e) => {
    e.preventDefault();
    console.log("Formulario fue enviado...");
    const { name_person, email, fecha, hour, subject } = state.persona;
    console.log(idpersona);
    console.log(email);
    console.log(name_person);
    console.log(fecha);
    console.log(hour);
    console.log(subject);

    var datosEnviar = {
      idpersona: idpersona,
      email: email,
      name_person: name_person,
      fecha: fecha,
      hour: hour,
      subject: subject,
    };

    fetch("http://localhost/API/?update=" + idpersona, {
      method: "POST",
      body: JSON.stringify(datosEnviar),
    })
      .then((respuesta) => respuesta.json())
      .then((datosRespuesta) => {
        console.log(datosRespuesta);
        console.log(datosEnviar);
        swal({
          title: "Bien!",
          text: "Has sido editado con exito!",
          icon: "success",
        }).then(function () {
          window.location = "/dashboard";
        });
      })
      .catch(console.log());
  };

  const consultar = () => {
    fetch("http://localhost/API/?get=" + idpersona)
      .then((respuesta) => respuesta.json())
      .then((datosRespuesta) => {
        console.log(datosRespuesta);
        setstate({ persona: datosRespuesta });
      })
      .catch(console.log());
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
                <Form key={index} onSubmit={enviarDatos}>
                  <Form.Group className="mb-3">
                    <Form.Label>Tu id</Form.Label>
                    <Form.Control
                      type="text"
                      name="persona.idpersona"
                      value={persona.idpersona}
                      readOnly
                    />
                    <Form.Label>Ingresa tu nombre</Form.Label>
                    <Form.Control
                      type="text"
                      name="name_person"
                      defaultValue={persona.name_person}
                      onChange={handleChange}
                    />
                    <Form.Label>Ingresa tu Correo</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      defaultValue={persona.email}
                      onChange={handleChange}
                    />
                    <Form.Label>Ingresa el dia de tu cita</Form.Label>
                    <Form.Control
                      type="date"
                      name="fecha"
                      defaultValue={persona.fecha}
                      onChange={handleChange}
                    ></Form.Control>
                    <Form.Label>Ingresa la hora</Form.Label>
                    <Form.Control
                      type="time"
                      name="hour"
                      defaultValue={persona.hour}
                      onChange={handleChange}
                    ></Form.Control>
                    <Form.Label>Ingresa un asunto de tu cita</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="asunto"
                      name="subject"
                      defaultValue={persona.subject}
                      onChange={handleChange}
                    ></Form.Control>
                  </Form.Group>
                  <Button variant="secondary" type="submit">
                    Guardar
                  </Button>
                  <Link to="/dashboard">
                    <Button variant="primary" type="submit">
                      Cancelar
                    </Button>
                  </Link>
                </Form>
              ))}
            </Col>
            <Col>
              {" "}
              <img
                className="patient-img2"
                src="../img/paciente.jpg"
                alt="patient"
              ></img>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default Editar;
