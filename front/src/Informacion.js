import React, { Component } from 'react'
import vegaEmbed from 'vega-embed';
class Informacion extends Component {
  constructor (props) {
    super(props)

    this.state = {
      nombre: '',
      datos: [{"a":"A","b":28},{"a":"B","b":55},{"a":"C","b":43},{"a":"D","b":91},{"a":"E","b":81},{"a":"F","b":53},{"a":"G","b":19},{"a":"H","b":87},{"a":"I","b":52},{"a":"J","b":52},{"a":"K","b":52},{"a":"L","b":52},{"a":"M","b":52}],
      spec: {"$schema":"https://vega.github.io/schema/vega-lite/v2.json","description":"A simple bar chart with embedded data.","data":{"name":"datos"},"mark":"bar","encoding":{"y":{"field":"a","type":"ordinal"},"x":{"field":"b","type":"quantitative"}}}
      
    }
    
  }

  componentDidMount() {
      try {
        const view = vegaEmbed(this.divGrafica, this.state.spec)
          .catch(error => console.log(error))
          .then((res) => res.view.insert('datos', this.state.datos).run());
      } catch (e) {
      }
    }

  render () {
    return  (
      <div>
      <br />
        <div class="panel-group">

         <div class="panel panel-primary">
            <div class="panel-heading">
                Nombre: {this.props.nombre}
            </div>
            <div class="panel-body">
                Grafica: 
                <div ref={(div) => this.divGrafica = div}>
            </div>
         </div>


           </div>
        </div>
      </div>
    );
  }
}

export default Informacion;