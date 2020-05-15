import React from "react";
import api from "../api";
import { useHistory } from "react-router-dom";

import "../App.css";
import { Button } from "@material-ui/core";

class Dashboard extends React.Component {

    state = {
        details: []
    }

    history = null;

    componentDidMount() {

        api.getDashboardDetails()
        .then(response => {
            this.setState({ details: response });
        }, err => {
            console.error(err);
        })
    }

    goBack = () => {
        this.props.history.push("/feedback");
    }

    render() {
        return (
            <section className="dashboard">
                <h1>Sector 1 - Dashboard</h1>
                <Button 
                  variant="contained" 
                  style={ {
                      float: "right",
                      margin: "1rem"
                  } }
                  size="large" 
                  color="primary"
                  onClick={this.goBack}
                  >
                  Regresar a pantalla de detección
              </Button>
                <div className="table-container">
                    <table className="table">
                        <thead>
                            <tr className="row header">
                                <td>Fecha</td>
                                <td>Descripción</td>
                                <td>Sector</td>
                                <td>Ubicación</td>
                                <td>Coordenadas</td>
                            </tr>
                        </thead>
                        <tbody>
                            { this.state.details && this.state.details.map(d => 
                                <tr className="row">
                                    <td>{d.dateString}</td>
                                    <td>{d.incident ? "OK" : "Incidencia detectada"}</td>
                                    <td>{d.location.sector}</td>
                                    <td>{d.location.location}</td>
                                    <td>{d.location.lat}, {d.location.long}</td>
                                </tr>
                            ) }
                        </tbody>
                    </table>
                </div>
            </section>
        );
    }

}

export default Dashboard;