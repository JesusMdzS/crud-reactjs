import React, { useState } from "react";
import "../components/styles/dashboard.css";
import Table from "react-bootstrap/Table";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
import Agendar from "./agendar";

function Dashboard() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="all">
      <h1 className="header-text">CITAS</h1>
      <Button variant="secondary" onClick={handleShow}>
        Agregar cita
      </Button>
      <br />
      <br />
      <Navbar bg="dark"></Navbar>
      <Table striped bordered hover className="text-center">
        <thead>
          <tr>
            <th>Id</th>
            <th>Doctor</th>
            <th>Paciente</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>
              <Button variant="secondary" onClick={handleShow}>
                Editar
              </Button>
            </td>
            <td>
              <Button variant="primary">Eliminar</Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Thornton</td>
            <td>Mark</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry the Bird</td>
            <td>@twitter</td>
            <td>Mark</td>
            <td>Mark</td>
          </tr>
        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Agrega tu cita</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Agendar></Agendar>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Dashboard;
