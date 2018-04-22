import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import FormQ from './Form.js';

class App extends Component {

    handleObject(object) {
        console.log(`handle object from App component`)
        console.log(object)
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <section>
                    <FormQ handleState={object => this.handleObject(object)}/>
                </section>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
