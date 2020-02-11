import React, { Component } from 'react';

class App extends Component {

    constructor(){
        super();

        this.state = {
            items: []
        };
    };

    addItem = (event) => {
        
        event.preventDefault();
    }

    render(){
        return(
        <form onSubmit={this.addItem.bind(this)}>
            <input placeholder='enter task'/>
            <button>add</button>
        </form>
        );
    }
    
}

export default App;