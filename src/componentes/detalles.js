import React, { Component } from 'react';
import { connect } from "redux-zero/react";
import { Row, Grid, Form, FormGroup, Col, ControlLabel, FormControl, Checkbox, Button } from 'react-bootstrap';
import { HashRouter, Switch, Route, NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom';
import registerServiceWorker from '../registerServiceWorker';

//Componete para la vista de detalles de clinica//
const Detalles = () => {
    return (
        <div>
            <Row>
                <Col md={12}>
                    <h1 className="g-titulo">Detalles de Clínica</h1>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <h1 className="g-titulo-detalle">Tratamientos de la Clínica</h1>
                    <li>Ortodoncia</li>
                </Col>
                <Col md={6}>
                    <h1 className="g-titulo-detalle">Cobertura del Seguro</h1>
                    <li>Ortodoncia</li>
                </Col>
            </Row>
        </div>
    );
}
export default Detalles;