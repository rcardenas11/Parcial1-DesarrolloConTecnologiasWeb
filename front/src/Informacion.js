import React, { Component } from 'react'
class Informacion extends Component {
  constructor (props) {
    super(props)

    this.state = {
      nombre: '',
      datos: [],
      spec: {}
      
    }
    
  }


  render () {
    return (
      <div>
        <div class="panel-group">
          <div class="panel panel-default">
            <div class="panel-body">{this.state.nombre}</div>
          </div>
          <div class="panel panel-default">
            <div class="panel-body">

              <div ref={(div) => this.divGrafica = div}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Informacion;