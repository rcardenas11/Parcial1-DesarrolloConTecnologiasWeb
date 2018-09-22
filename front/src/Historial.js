import React, { Component } from 'react'
import Informacion from './Informacion';

class Historial extends Component {
   
  constructor(props){

    super(props);

    this.state = {
      listaGraficas: []
    }
  }

  
  componentDidMount () {

    fetch('/getGraficas')
      .then((res) => {
        return res.json()
      })
      .then((json) => this.setState({ listaGraficas: json }))
      .catch((err) => console.log(err))
  }
  
  render() {
   return this.state.listaGraficas.map((obje, i) => (
     <div>
     <Informacion nombre={obje.nombre} spec={obje.spec} datos={obje.datos}/> 
      
     </div>
    ));

  }
  
}

export default Historial;
