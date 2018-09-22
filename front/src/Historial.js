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
   return (
     <div>
     {this.state.listaGraficas.map((graf) => <Informacion nombre={graf.nombre} spec={graf.spec} datos={graf.datos}/>   )}
      
     </div>
    );

  }
  
}

export default Historial;
