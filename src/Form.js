import React, { Component } from 'react';

class FormQ extends Component {

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
        lean: ''
    };

    handleSubmit(e) {
        this.props.handleState(this.state);
        e.preventDefault();
    }

    handleChange(e, field) {
        switch (field) {
            case "sex":
                console.log(`value is ${e.target.value} and field is '${field}'`);
                this.setState({sex: e.target.value});
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
                console.log('Bad');
                break;
        }
    }

    render() {
        return (
            <form onSubmit={event => this.handleSubmit(event)}>
                <input type="text" value={this.state.sex} onChange={event => this.handleChange(event, "sex")}/>
                <input type="text" value={this.state.age} onChange={event => this.handleChange(event, "age")}/>
                <input type="text" value={this.state.height} onChange={event => this.handleChange(event, "height")}/>
                <input type="text" value={this.state.bodyMass} onChange={event => this.handleChange(event, "bodyMass")}/>
                <input type="text" value={this.state.chest} onChange={event => this.handleChange(event, "chest")}/>
                <input type="text" value={this.state.bodyMassIndex} onChange={event => this.handleChange(event, "bodyMassIndex")}/>
                <input type="text" value={this.state.shoulder} onChange={event => this.handleChange(event, "shoulder")}/>
                <input type="text" value={this.state.forearm} onChange={event => this.handleChange(event, "forearm")}/>
                <input type="text" value={this.state.shin} onChange={event => this.handleChange(event, "shin")}/>
                <input type="text" value={this.state.lean} onChange={event => this.handleChange(event, "lean")}/>

                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default  FormQ;