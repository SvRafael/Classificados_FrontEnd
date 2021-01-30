
import React, {Component} from 'react';
import axios from 'axios'
import './Total.css'

const url = 'http://localhost:3001/';





export default class Total extends Component{

  state = {
    total: [],
  }

  componentDidMount() {
      const url2 = `${url}classificados/total`;
      axios.get(url2).then(response => response.data)
      .then((data) => {
          this.setState({ total: data})
          console.log(this.state.total)
      })
  }


  render(){



    return (
        <div className="divTotal">
         {this.state.total.map((count) => (
            <h1>{count.total} Classificados</h1>
        ))}
        </div>
         
    )
  }
  
}