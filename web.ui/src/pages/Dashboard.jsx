import React from "react";
import api from "../api";

import "../App.css";

class Dashboard extends React.Component {

    state = {
        details: []
    }

    componentDidMount() {
        api.getDashboardDetails()
        .then(response => {
            console.log("What´s up fuckers", JSON.stringify(response));
            // this.setState({ details: response.data });
        }, err => {
            console.error(err);
        })
    }

    render() {
        return (
            <section className="dashboard">
                <h1>Sector 1 - Dashboard</h1>
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
                            <tr className="row">
                                <td>Fecha</td>
                                <td>Descripción</td>
                                <td>Sector</td>
                                <td>Ubicación</td>
                                <td>Coordenadas</td>
                            </tr>
                            <tr className="row">
                                <td>Fecha</td>
                                <td>Descripción</td>
                                <td>Sector</td>
                                <td>Ubicación</td>
                                <td>Coordenadas</td>
                            </tr>
                            <tr className="row">
                                <td>Fecha</td>
                                <td>Descripción</td>
                                <td>Sector</td>
                                <td>Ubicación</td>
                                <td>Coordenadas</td>
                            </tr>
                            <tr className="row">
                                <td>Fecha</td>
                                <td>Descripción</td>
                                <td>Sector</td>
                                <td>Ubicación</td>
                                <td>Coordenadas</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        );
    }

}

export default Dashboard;