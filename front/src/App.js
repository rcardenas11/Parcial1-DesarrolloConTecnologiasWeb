import React, { Component } from 'react';
import vegaEmbed from 'vega-embed';
import Papa from 'papaparse';
import Grafica from './Grafica';

import './App.css';

class App extends Component {
  constructor(props){

    super(props);
    this.state ={

       datos: [
          { 'a': 'A', 'b': 100 }, { 'a': 'B', 'b': 100 }, { 'a': 'C', 'b': 100 },
          { 'a': 'D', 'b': 100 }, { 'a': 'E', 'b': 100 }, { 'a': 'F', 'b': 100 },
          { 'a': 'G', 'b': 100 }, { 'a': 'H', 'b': 100 }, { 'a': 'I', 'b': 100 }
        ],spec: {
          "$schema": "https://vega.github.io/schema/vega-lite/v2.json",
          "description": "A simple bar chart with embedded data.",
          "data": {
            "name": "datos"
          },
          "mark": "bar",
          "encoding": {
            "y": { "field": "a", "type": "ordinal" },
            "x": { "field": "b", "type": "quantitative" }
          }
        }

    };

    this.cargarTextBoxs = this.cargarTextBoxs.bind(this);
    this.cargarSpecTextBox = this.cargarSpecTextBox.bind(this);
    this.cargarJsonTextBox = this.cargarJsonTextBox.bind(this);
  }


  
   cargarSpecTextBox() {
      try {
        this.setState({ spec: JSON.parse(this.divSPEC.value) });
        alert('Se cargó el Spec')
      } catch (e) {
        alert('Hubo un problema cargando el spec');

      }
    }

   cargarJsonTextBox(){
    try {
      this.setState({ datos: JSON.parse(this.divJSON.value) });
      alert('Se cargó una visualización usando la entrada JSON')
    } catch (e) {
      alert('Hubo un problema subiendo el archivo json');

    }
   } 

   cargarTextBoxs(event) {
    //  this.cargarSpecTextBox();
      this.cargarJsonTextBox();
   }

   componentDidUpdate() {
      try {
        const view = vegaEmbed(this.divGrafica, this.state.spec)
          .catch(error => console.log(error))
          .then((res) => res.view.insert('datos', this.state.datos).run());
      } catch (e) {
        alert('Hubo un problema renderizando de nuevo la visualizacion');
      }
    }

   componentDidMount() {
    try {
      const view = vegaEmbed(this.divGrafica, this.state.spec)
        .catch(error => console.log(error))
        .then((res) => res.view.insert('datos', this.state.datos).run());
    } catch (e) {
      alert('Hubo un problema renderizando el archivo');
    }


  }

  render() {
   return (
      <div className="App">
        <nav class="navbar navbar-dark bg-dark">
          <a class="navbar-brand" href="#">Parcial 1</a>
      </nav>
      <div class="container">
        <div class="row">
          <div class="col-sm">
               JSON
               <textarea class="textEditor" cols="40" rows="15" ref={(div) => this.divJSON = div}></textarea>
          </div>
          <div class="col-sm">
               SPEC
               <textarea class="textEditor" cols="40" rows="15" ref={(div) => this.divSPEC = div}></textarea>
          </div>
          <div class="col-sm">
               Grafica
               <div ref={(div) => this.divGrafica = div}></div>
          </div>
        </div>
      </div>
      
     <button className='btn btn-primary' onClick={this.cargarTextBoxs}>Cargar JSON</button>
      
      </div>
    );
  }
}

export default App;
