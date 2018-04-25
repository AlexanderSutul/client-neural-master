import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Row from 'react-bootstrap/lib/Row';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {sendData} from "./actions/send_data_action";

class Form extends Component {

    state = {
        sex: '',
        age: '',
        height: '',
        bodyMass: '',
        chest: '',
        bodyMassIndex: '',
        shoulder: '',
        forearm: '',
        shin: '',
        lean: '',
        show: false
    };

    handleSubmit = () => {
        this.props.handleState(this.state);
    };

    handleChange = (e, field) => {
        switch (field) {
            case "sex":
                console.log(`value is ${this.inputEl.value} and field is '${field}'`);
                this.setState({sex: this.inputEl.value});
                break;
            case "age":
                console.log(`value is ${e.target.value} and field is '${field}'`);
                this.setState({age: e.target.value});
                break;
            case "height":
                console.log(`value is ${e.target.value} and field is '${field}'`);
                this.setState({height: e.target.value});
                break;
            case "bodyMass":
                console.log(`value is ${e.target.value} and field is '${field}'`);
                this.setState({bodyMass: e.target.value});
                break;
            case "chest":
                console.log(`value is ${e.target.value} and field is '${field}'`);
                this.setState({chest: e.target.value});
                break;
            case "bodyMassIndex":
                console.log(`value is ${e.target.value} and field is '${field}'`);
                this.setState({bodyMassIndex: e.target.value});
                break;
            case "shoulder":
                console.log(`value is ${e.target.value} and field is '${field}'`);
                this.setState({shoulder: e.target.value});
                break;
            case "forearm":
                console.log(`value is ${e.target.value} and field is '${field}'`);
                this.setState({forearm: e.target.value});
                break;
            case "shin":
                console.log(`value is ${e.target.value} and field is '${field}'`);
                this.setState({shin: e.target.value});
                break;
            case "lean":
                console.log(`value is ${e.target.value} and field is '${field}'`);
                this.setState({lean: e.target.value});
                break;

            default:
                alert('No one should be here in switch\'s default');
                break;
        }
    };

    render() {
        console.log(this.props.testStore);
        return (
            <form>
                <Row>
                    <Col md={6}>
                        <ControlLabel>Пол</ControlLabel>
                        <FormControl
                            componentClass="select"
                            placeholder="select"
                            onChange={event => this.handleChange(event, "sex")}
                            inputRef={ el => this.inputEl=el }
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
                            Индекс мыссы тела
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
                    <Col md={12} className="text-center">
                        <Button bsStyle="danger" onClick={() => {
                            this.props.sendData(this.props.data);
                        }}>Отправить</Button>
                    </Col>
                </Row>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.data
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({sendData}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Form);