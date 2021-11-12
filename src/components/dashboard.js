import React from "react";
import "../components/styles/dashboard.css";
import Table from "react-bootstrap/Table";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datosCargados: false,
      personas: [],
    };
  }
  cargarDatos() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((respuesta) => respuesta.json())
      .then((datosRespuesta) => {
        console.log(datosRespuesta);
        this.setState({ datosCargados: true, personas: datosRespuesta });
      })
      .catch(console.log());
  }
  componentDidMount() {
    this.cargarDatos();
  }
  render() {
    const { datosCargados, personas } = this.state;
    if (!datosCargados) {
      return <div>Cargando...</div>;
    } else {
      return (
        <div className="all">
          <h1 className="header-text">CITAS</h1>

          <Link to="/create">
            <Button variant="secondary" onClick="">
              Agregar cita
            </Button>
          </Link>
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
              {personas.map((persona) => (
                <tr key={persona.id}>
                  <td>{persona.id}</td>
                  <td>{persona.name}</td>
                  <td>{persona.name}</td>
                  <td>{persona.name}</td>
                  <td>{persona.name}</td>
                  <td>
                    <Link to="/edit">
                      <Button variant="secondary" onClick="">
                        Editar
                      </Button>
                    </Link>
                  </td>
                  <td>
                    <Button variant="primary">Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      );
    }
  }
}

export default Dashboard;
