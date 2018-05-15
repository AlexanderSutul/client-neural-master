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
import ModalComponent from './ModalComponent';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {showForm, showAdmin} from "./actions/switch_view_action";

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
                                  Форма пациента
                                </NavItem>
                                <NavItem onClick={() => props.showAdmin(props.settings)}>
                                  Админ-панель
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
                            Админ панель
                        </h4>
                    </div>
                }
            </Grid>
        );
};

function mapStateToProps(state) {
    return {
        settings: state.settings
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({showForm, showAdmin}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(App);
