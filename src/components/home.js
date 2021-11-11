import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import "../components/styles/home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <Navbar bg="white" variant="white">
          <img src="./img/logo.png" className="logo" alt="logo"></img>
          <h1 className="titulo"> Agendador de citas médicas</h1>
        </Navbar>
      </div>
      <Container>
        <Row>
          <Col>
            <div className="information-card">
              <h1 className="information-card-h1">Crea tu cita hoy mismo!</h1>
              <p className="information-card-p">
                Ahora puedes crear tus citas desde la comodidad de tu casa sin
                tener que arriesgarte.
              </p>
              <Link to="/dashboard">
                <Button variant="light" size="lg">
                  Crear cita
                </Button>
              </Link>
            </div>
          </Col>
          <Col>
            <img
              className="patient-img"
              src="./img/paciente.jpg"
              alt="patient"
            ></img>
          </Col>
        </Row>
      </Container>
      <Card.Footer className="text-muted"></Card.Footer>
    </div>
  );
}

export default Home;
