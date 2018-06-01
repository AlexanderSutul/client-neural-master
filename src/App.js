import React from 'react';
import './App.css';
import Form from './Form.js';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import NavBar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavBarHeader from 'react-bootstrap/lib/NavbarHeader';
import NavBarBrand from 'react-bootstrap/lib/NavbarBrand';
import Table from 'react-bootstrap/lib/Table';
import ModalComponent from './ModalComponent';
import ModalComponentPatient from './ModalComponentPatient';
import Button from 'react-bootstrap/lib/Button';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {showForm, showAdmin} from "./actions/switch_view_action";
import {getPatientsRequest, deletePatientRequest} from "./actions/patients_action";
import {openModalPatient} from './actions/modal_action';

const App = (props) => {
        return (
            <Grid fluid={false}>
                <Row> {/*Хедер*/}
                    <Col md={12}>
                        <NavBar>
                            <NavBarHeader>
                                <NavBarBrand>
                                    <a>Neural-Breathe-Master-App</a>
                                </NavBarBrand>
                            </NavBarHeader>
                            <Nav>
                                <NavItem onClick={() => props.showForm(props.settings)}>
                                  Анализ
                                </NavItem>
                                <NavItem onClick={() => {
                                    props.showAdmin(props.settings)
                                    props.getPatientsRequest(props.patients)
                                }}>
                                  Здоровые пациенты
                                </NavItem>
                              </Nav>
                        </NavBar>
                    </Col>
                </Row>
                { props.settings.form ?
                    <div>
                    <Row> {/*Лейбл*/}
                        <Col md={12}>
                            <div>
                                <h4>
                                    Введите данные пациента в форму ниже:
                                </h4>
                            </div>
                        </Col>
                    </Row>
                    <Row> {/*Форма*/}
                        <Col md={12}>
                            <Form/>
                        </Col>
                    </Row>
                    {/*Модальное окно*/}
                    <ModalComponent/>
                    </div>
                    :
                    <div>
                        <h4>
                            Пациенты
                        </h4>
                        <div>
                            <Button bsStyle="primary" onClick={() => {
                                props.openModalPatient(props.settings)
                            }}>Новый здоровый пациент</Button>
                        </div>

                            {
                                props.patients.patientsList.length > 0 ?
                                <Table>
                                    <thead>
                                    <tr>
                                    <th>#</th>
                                    <th>sex</th>
                                    <th>age</th>
                                    <th>height</th>
                                    <th>bodyMass</th>
                                    <th>chest</th>
                                    <th>bodyMassIndex</th>
                                    <th>shoulder</th>
                                    <th>forearm</th>
                                    <th>shin</th>
                                    <th>lean</th>
                                    <th>mep</th>
                                    <th>mip</th>
                                    <th>snip</th>
                                    <th></th>
                                    <th></th>
                                    <th>mep</th>
                                    <th>mip</th>
                                    <th>snip</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                {props.patients.patientsList.map((patient) =>
                                            <tr key={patient[0]}>
                                                <td>{patient[0]}</td>
                                                <td>{patient[1]}</td>
                                                <td>{patient[2]}</td>
                                                <td>{patient[3]}</td>
                                                <td>{patient[4]}</td>
                                                <td>{patient[5]}</td>
                                                <td>{patient[6]}</td>
                                                <td>{patient[7]}</td>
                                                <td>{patient[8]}</td>
                                                <td>{patient[9]}</td>
                                                <td>{patient[10]}</td>
                                                <td>{patient[11]}</td>
                                                <td>{patient[12]}</td>
                                                <td>{patient[13]}</td>
                                                <td><Button bsStyle="danger" onClick={() => {
                                                    props.patients.deletedPatient = patient[0];
                                                    props.deletePatientRequest(props.patients);
                                                }}>Удалить</Button></td>
                                                <td><Button bsStyle="primary" onClick={() => {
                                                    alert(`Пациент ${patient[0]} пересчитан`)
                                                }}>Обработать</Button></td>
                                                <td>{patient[11]}</td>
                                                <td>{patient[12]}</td>
                                                <td>{patient[13]}</td>
                                            </tr>
                                )}
                                </tbody>
                                </Table>
                                :
                                <div>Список пациентов пуст</div>
                            }
                            {/*Модальное окно пациент*/}
                            <ModalComponentPatient/>
                    </div>
                }
            </Grid>
        );
};

function mapStateToProps(state) {
    return {
        settings: state.settings,
        patients: state.patients
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        showForm, showAdmin, getPatientsRequest, deletePatientRequest, openModalPatient
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(App);
