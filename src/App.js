import React from 'react';
import './App.css';
import Form from './Form.js';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import NavBar from 'react-bootstrap/lib/Navbar';
import NavBarHeader from 'react-bootstrap/lib/NavbarHeader';
import NavBarBrand from 'react-bootstrap/lib/NavbarBrand';
import ModalComponent from './ModalComponent';


const App = () => {
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
                        </NavBar>
                    </Col>
                </Row>
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
            </Grid>
        );
};

export default App;
