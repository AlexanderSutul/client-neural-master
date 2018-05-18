import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import ModalHeader from 'react-bootstrap/lib/ModalHeader';
import ModalTitle from 'react-bootstrap/lib/ModalTitle';
import ModalBody from 'react-bootstrap/lib/ModalBody';
import ModalFooter from 'react-bootstrap/lib/ModalFooter';
import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Row from 'react-bootstrap/lib/Row';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {closeModalPatient} from "./actions/modal_action";
import {checkPatient} from './actions/check_input_action';
import {addPatientRequest, getPatientsRequest} from './actions/patients_action';

const ModalComponent = (props) => {

    const handleChange = (e, field) => {
        switch (field) {
            case "sex":
                console.log(`value is ${this.sexInput.value} and field is '${field}'`);
                props.patients.patient.sex = this.sexInput.value;
                break;
            case "age":
                console.log(`value is ${e.target.value} and field is '${field}'`);
                props.patients.patient.age = e.target.value;
                break;
            case "height":
                console.log(`value is ${e.target.value} and field is '${field}'`);
                props.patients.patient.height = e.target.value;
                break;
            case "bodyMass":
                console.log(`value is ${e.target.value} and field is '${field}'`);
                props.patients.patient.bodyMass = e.target.value;
                break;
            case "chest":
                console.log(`value is ${e.target.value} and field is '${field}'`);
                props.patients.patient.chest = e.target.value;
                break;
            case "bodyMassIndex":
                console.log(`value is ${e.target.value} and field is '${field}'`);
                props.patients.patient.bodyMassIndex = e.target.value;
                break;
            case "shoulder":
                console.log(`value is ${e.target.value} and field is '${field}'`);
                props.patients.patient.shoulder = e.target.value;
                break;
            case "forearm":
                console.log(`value is ${e.target.value} and field is '${field}'`);
                props.patients.patient.forearm = e.target.value;
                break;
            case "shin":
                console.log(`value is ${e.target.value} and field is '${field}'`);
                props.patients.patient.shin = e.target.value;
                break;
            case "lean":
                console.log(`value is ${e.target.value} and field is '${field}'`);
                props.patients.patient.lean = e.target.value;
                break;
            case "mep":
                console.log(`value is ${e.target.value} and field is '${field}'`);
                props.patients.patient.mep = e.target.value;
                break;
            case "mip":
                console.log(`value is ${e.target.value} and field is '${field}'`);
                props.patients.patient.mip = e.target.value;
                break;
            case "snip":
                console.log(`value is ${e.target.value} and field is '${field}'`);
                props.patients.patient.snip = e.target.value;
                break;

            default:
                alert('No one should be here in switch\'s default');
                break;
        }
        props.checkPatient(props.patients);
        console.log('props.patients', props.patients);
    }

    return (
        <div className="modal-container" style={{height: 550}}>
            <Modal
                show={props.settings.modalPatient}
                onHide={() => {
                    props.closeModalPatient(props.settings);
                }}
                aria-labelledby="contained-modal-title"
            >
                <ModalHeader closeButton>
                    <ModalTitle id="contained-modal-title">
                        Добавление нового пациента
                    </ModalTitle>
                </ModalHeader>
                <ModalBody>
                <form>
                    <Row>
                        <Col md={6}>
                            <ControlLabel>Пол</ControlLabel>
                            <FormControl
                                componentClass="select"
                                placeholder="select"
                                onChange={event => handleChange(event, "sex")}
                                inputRef={el => this.sexInput = el}
                            >
                                <option selected disabled>Выберите пол</option>
                                <option value={1}>Мужской</option>
                                <option value={0}>Женский</option>
                            </FormControl>
                            <ControlLabel>
                                Возраст
                            </ControlLabel>
                            <FormControl
                                type="number"
                                placeholder=""
                                value={props.patients.patient.age}
                                onChange={event => handleChange(event, "age")}
                            />
                            <ControlLabel>
                                Рост
                            </ControlLabel>
                            <FormControl
                                type="number"
                                placeholder=""
                                value={props.patients.patient.height}
                                onChange={event => handleChange(event, "height")}
                            />
                            <ControlLabel>
                                Вес
                            </ControlLabel>
                            <FormControl
                                type="number"
                                placeholder=""
                                value={props.patients.patient.bodyMass}
                                onChange={event => handleChange(event, "bodyMass")}
                            />
                            <ControlLabel>
                                Индекс массы тела
                            </ControlLabel>
                            <FormControl
                                type="number"
                                placeholder=""
                                value={props.patients.patient.bodyMassIndex}
                                onChange={event => handleChange(event, "bodyMassIndex")}
                            />
                        </Col>
                        <Col md={6}>
                            <ControlLabel>
                                Грудь
                            </ControlLabel>
                            <FormControl
                                type="number"
                                placeholder=""
                                value={props.patients.patient.chest}
                                onChange={event => handleChange(event, "chest")}
                            />
                            <ControlLabel>
                                Охват плеч
                            </ControlLabel>
                            <FormControl
                                type="number"
                                placeholder=""
                                value={props.patients.patient.shoulder}
                                onChange={event => handleChange(event, "shoulder")}
                            />
                            <ControlLabel>
                                Предплечье
                            </ControlLabel>
                            <FormControl
                                type="number"
                                placeholder=""
                                value={props.patients.patient.forearm}
                                onChange={event => handleChange(event, "forearm")}
                            />
                            <ControlLabel>
                                Голень
                            </ControlLabel>
                            <FormControl
                                type="number"
                                placeholder=""
                                value={props.patients.patient.shin}
                                onChange={event => handleChange(event, "shin")}
                            />
                            <ControlLabel>
                                Мышечная масса
                            </ControlLabel>
                            <FormControl
                                type="number"
                                placeholder=""
                                value={props.patients.patient.lean}
                                onChange={event => handleChange(event, "lean")}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <ControlLabel>
                                MEP
                            </ControlLabel>
                            <FormControl
                                type="number"
                                placeholder=""
                                value={props.patients.patient.mep}
                                onChange={event => handleChange(event, "mep")}
                            />
                        </Col>
                        <Col md={4}>
                            <ControlLabel>
                                MIP
                            </ControlLabel>
                            <FormControl
                                type="number"
                                placeholder=""
                                value={props.patients.patient.mip}
                                onChange={event => handleChange(event, "mip")}
                            />
                        </Col>
                        <Col md={4}>
                            <ControlLabel>
                                SNIP
                            </ControlLabel>
                            <FormControl
                                type="number"
                                placeholder=""
                                value={props.patients.patient.snip}
                                onChange={event => handleChange(event, "snip")}
                            />
                        </Col>
                    </Row>
                </form>
                </ModalBody>
                <ModalFooter>
                    <Button disabled={props.patients.isErrors}  onClick={() => {
                        props.addPatientRequest(props.patients.patient);
                        props.closeModalPatient(props.settings)
                    }}>Добавить</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
};

function mapStateToProps(state) {
    return {
        settings: state.settings,
        patients: state.patients
    }
}


function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        closeModalPatient,
        checkPatient,
        addPatientRequest,
        getPatientsRequest
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ModalComponent);
