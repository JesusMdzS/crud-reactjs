// import Button from "@restart/ui/esm/Button";
import React from "react";
import { Form, Button } from "react-bootstrap";

function Agendar() {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Ingresa tu nombre</Form.Label>
        <Form.Control type="text" placeholder="name" required></Form.Control>
        <Form.Label>Selecciona un médico</Form.Label>
        <Form.Select aria-label="Default select example">
          <option>Nombre de los médicos</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
        <Form.Label>Ingresa el dia de tu cita</Form.Label>
        <Form.Control type="date" placeholder="dia" required></Form.Control>
        <Form.Label>Ingresa la hora</Form.Label>
        <Form.Control type="time" placeholder="hora" required></Form.Control>
        <Form.Label>Ingresa un asunto de tu cita</Form.Label>
        <Form.Control type="text" placeholder="asunto" required></Form.Control>
      </Form.Group>
      <Button variant="secondary" type="submit">
        Agregar
      </Button>
    </Form>
  );
}

export default Agendar;
