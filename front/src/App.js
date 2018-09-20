import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      
      arreglo: []

    };
  }


componentDidMount() {



    fetch("/getData")
      .then((response) => { return response.json(); })
      .then((json) => this.setState({ arreglo: json }));
  }

  
  render() {
    return (
      <div className="App">
       
      </div>
    );
  }
}

export default App;
