import React, {Component} from 'react';
import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Row from 'react-bootstrap/lib/Row';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {makeRequest} from "./actions/send_data_action";
import {openModal} from "./actions/modal_action";
import {checkData} from "./actions/check_input_action";

class Form extends Component {

    handleChange = (e, field) => {
        switch (field) {
            case "sex":
                console.log(`value is ${this.sexInput.value} and field is '${field}'`);
                this.props.data.sex = this.sexInput.value;
                break;
            case "age":
                console.log(`value is ${e.target.value} and field is '${field}'`);
                this.props.data.age = e.target.value;
                break;
            case "height":
                console.log(`value is ${e.target.value} and field is '${field}'`);
                this.props.data.height = e.target.value;
                break;
            case "bodyMass":
                console.log(`value is ${e.target.value} and field is '${field}'`);
                this.props.data.bodyMass = e.target.value;
                break;
            case "chest":
                console.log(`value is ${e.target.value} and field is '${field}'`);
                this.props.data.chest = e.target.value;
                break;
            case "bodyMassIndex":
                console.log(`value is ${e.target.value} and field is '${field}'`);
                this.props.data.bodyMassIndex = e.target.value;
                break;
            case "shoulder":
                console.log(`value is ${e.target.value} and field is '${field}'`);
                this.props.data.shoulder = e.target.value;
                break;
            case "forearm":
                console.log(`value is ${e.target.value} and field is '${field}'`);
                this.props.data.forearm = e.target.value;
                break;
            case "shin":
                console.log(`value is ${e.target.value} and field is '${field}'`);
                this.props.data.shin = e.target.value;
                break;
            case "lean":
                console.log(`value is ${e.target.value} and field is '${field}'`);
                this.props.data.lean = e.target.value;
                break;
            case "type":
                console.log(`value is ${this.typeInput.value} and field is '${field}'`);
                this.props.data.type = this.typeInput.value;
                break;

            default:
                alert('No one should be here in switch\'s default');
                break;
        }
        this.props.checkData(this.props.data);
    };

    render() {
        return (
            <form>
                <Row>
                    <Col md={6}>
                        <ControlLabel>Пол</ControlLabel>
                        <FormControl
                            componentClass="select"
                            placeholder="select"
                            onChange={event => this.handleChange(event, "sex")}
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
                            value={this.props.data.age}
                            onChange={event => this.handleChange(event, "age")}
                        />
                        <ControlLabel>
                            Рост
                        </ControlLabel>
                        <FormControl
                            type="number"
                            placeholder=""
                            value={this.props.data.height}
                            onChange={event => this.handleChange(event, "height")}
                        />
                        <ControlLabel>
                            Вес
                        </ControlLabel>
                        <FormControl
                            type="number"
                            placeholder=""
                            value={this.props.data.bodyMass}
                            onChange={event => this.handleChange(event, "bodyMass")}
                        />
                        <ControlLabel>
                            Индекс массы тела
                        </ControlLabel>
                        <FormControl
                            type="number"
                            placeholder=""
                            value={this.props.data.bodyMassIndex}
                            onChange={event => this.handleChange(event, "bodyMassIndex")}
                        />
                    </Col>
                    <Col md={6}>
                        <ControlLabel>
                            Грудь
                        </ControlLabel>
                        <FormControl
                            type="number"
                            placeholder=""
                            value={this.props.data.chest}
                            onChange={event => this.handleChange(event, "chest")}
                        />
                        <ControlLabel>
                            Охват плеч
                        </ControlLabel>
                        <FormControl
                            type="number"
                            placeholder=""
                            value={this.props.data.shoulder}
                            onChange={event => this.handleChange(event, "shoulder")}
                        />
                        <ControlLabel>
                            Предплечье
                        </ControlLabel>
                        <FormControl
                            type="number"
                            placeholder=""
                            value={this.props.data.forearm}
                            onChange={event => this.handleChange(event, "forearm")}
                        />
                        <ControlLabel>
                            Голень
                        </ControlLabel>
                        <FormControl
                            type="number"
                            placeholder=""
                            value={this.props.data.shin}
                            onChange={event => this.handleChange(event, "shin")}
                        />
                        <ControlLabel>
                            Мышечная масса
                        </ControlLabel>
                        <FormControl
                            type="number"
                            placeholder=""
                            value={this.props.data.lean}
                            onChange={event => this.handleChange(event, "lean")}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <ControlLabel>Тип анализа</ControlLabel>
                        <FormControl
                            componentClass="select"
                            placeholder="select"
                            onChange={event => this.handleChange(event, "type")}
                            inputRef={el => this.typeInput = el}
                        >
                            <option selected disabled>Анализ</option>
                            <option value="mep">MEP</option>
                            <option value="mip">MIP</option>
                            <option value="snip">SNIP</option>
                        </FormControl>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="text-center">
                        <Button disabled={this.props.data.isErrors} bsStyle="primary" onClick={() => {
                            this.props.makeRequest(this.props.data);
                            this.props.openModal(this.props.settings);
                        }}>Отправить</Button>
                    </Col>
                </Row>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.data,
        settings: state.settings
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({makeRequest, openModal, checkData}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Form);
