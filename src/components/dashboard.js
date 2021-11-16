import React from "react";
import "../components/styles/dashboard.css";
import Table from "react-bootstrap/Table";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import swal from "sweetalert";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.url = "https://alondrakatt.com/APIPROMOTER/";
  }

  //DELETE
  borrarDatos = (id) => {
    swal({
      title: "¿Estás seguro?",
      text: "Una vez eliminado, no podrás recuperar esta cita",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        console.log(id);
        fetch(this.url + "?delete=" + id)
          .then((respuesta) => respuesta.json())
          .then((datosRespuesta) => {
            console.log(datosRespuesta);
            this.cargarDatos();
          })
          .catch(console.log());
        swal("Se ha eliminado correctamente :)", {
          icon: "success",
        });
      } else {
        swal("Tu operación fue cancelada");
      }
    });
  };

  //GET ALL DATA
  cargarDatos() {
    fetch(this.url)
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
        <>
          <div className="header-div">
            <h1 className="text-head">Agrega tus datos para agendar tu cita</h1>
          </div>

          <div className="all">
            <h1 className="header-text2">CITAS</h1>
            <Link to="/create">
              <Button variant="secondary" size="lg">
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
                  <th>Id paciente</th>
                  <th>Paciente</th>
                  <th>email</th>
                  <th>Fecha</th>
                  <th>Hora</th>
                  <th>Asunto</th>
                  <th>Editar</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {personas.map((persona, index) => (
                  <tr key={index}>
                    <td>{persona.idcita}</td>
                    <td>{persona.idpersona}</td>
                    <td>{persona.nombre_persona}</td>
                    <td>{persona.email}</td>
                    <td>{persona.fecha}</td>
                    <td>{persona.hour}</td>
                    <td>{persona.subject}</td>
                    <td>
                      <Link
                        to={{
                          pathname: "/edit/" + persona.idpersona,
                        }}
                      >
                        <Button variant="secondary">Editar</Button>
                      </Link>
                    </td>
                    <td>
                      <Button
                        variant="primary"
                        onClick={() => this.borrarDatos(persona.idpersona)}
                      >
                        Eliminar
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </>
      );
    }
  }
}

export default Dashboard;
