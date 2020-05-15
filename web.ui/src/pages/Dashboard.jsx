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
            this.setState({ details: response });
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
                            { this.state.details && this.state.details.map(d => 
                                <tr className="row">
                                    <td>{d.dateString}</td>
                                    <td>{d.description}</td>
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