import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                sonia: 'false',
                maria: 'false',
                john: 'false',
                michael: 'false'
            }
        }
    }

    showState = (name) => {
        this.setState((state) => {
            state.data[name] = state.data[name] === 'true' ? 'false' : 'true';
            return {
                data : state.data
            }
        })
    }


    render() {
        return (
            <div>
                <div className="container">
                    <input type="checkbox" value="sonia"  onClick={this.showState.bind(this, 'sonia')} /> sonia <br/>
                    <input type="checkbox" value="maria"  onClick={this.showState.bind(this, 'maria')}/> maria <br/>
                    <input type="checkbox" value="john"  onClick={this.showState.bind(this, 'john')}/> john <br/>
                    <input type="checkbox" value="michael"  onClick={this.showState.bind(this, 'michael')}/> michael
                </div>
                <div>
                    <div>sonia: {this.state.data.sonia} </div>
                    <div>maria: {this.state.data.maria} </div>
                    <div>john: {this.state.data.john} </div>
                    <div>michael: {this.state.data.michael} </div>
                </div>
            </div>
        );
    }
}

export default App;
