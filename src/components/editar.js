import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./styles/agendar.css";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";

function Editar() {
  let { idpersona } = useParams();
  // Declaración de una variable de estado que llamaremos "state"
  const [stateUser, setstateUser] = useState({
    name_person: "",
    email: "",
    fecha: "",
    hour: "",
    subject: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setstateUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(stateUser);
  };

  const consultar = async () => {
    await axios.get("http://localhost/API/?get=" + idpersona).then((res) => {
      console.log(res.data[0]);
      setstateUser(res.data[0]);
    });
  };

  const enviarDatos = async () => {
    fetch("http://localhost/API/?update=" + idpersona, {
      method: "POST",
      body: JSON.stringify(stateUser),
    })
      .then((respuesta) => respuesta.json())
      .then((datosRespuesta) => {
        console.log(datosRespuesta);
        console.log(stateUser);
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
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Tu id</Form.Label>
                  <Form.Control
                    type="text"
                    name="persona.idpersona"
                    value={idpersona}
                    readOnly
                  />
                  <Form.Label>Ingresa tu nombre</Form.Label>
                  <Form.Control
                    type="text"
                    name="name_person"
                    value={stateUser.name_person}
                    onChange={handleChange}
                  />
                  <Form.Label>Ingresa tu Correo</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={stateUser.email}
                    onChange={handleChange}
                  />
                  <Form.Label>Ingresa el dia de tu cita</Form.Label>
                  <Form.Control
                    type="date"
                    name="fecha"
                    value={stateUser.fecha}
                    onChange={handleChange}
                  ></Form.Control>
                  <Form.Label>Ingresa la hora</Form.Label>
                  <Form.Control
                    type="time"
                    name="hour"
                    value={stateUser.hour}
                    onChange={handleChange}
                  ></Form.Control>
                  <Form.Label>Ingresa un asunto de tu cita</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="asunto"
                    name="subject"
                    value={stateUser.subject}
                    onChange={handleChange}
                  ></Form.Control>
                </Form.Group>
                <Button variant="secondary" type="button" onClick={enviarDatos}>
                  Guardar
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
