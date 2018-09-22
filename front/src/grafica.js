import React, {Component} from "react";
//import vegaEmbed from 'vega-embed';
import vegaEmbed from 'vega-embed';
class grafica extends Component {

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


  render() {
    return(
          <div></div>
      );
  }

}
export default grafica;