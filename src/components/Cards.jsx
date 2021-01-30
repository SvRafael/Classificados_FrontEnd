import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Cards.css'
import axios from 'axios'

const url = 'http://localhost:3001/';

export default class RecipeReviewCard extends Component{

  state = {
    classificados: []
  }

  componentDidMount() {
      const url2 = `${url}classificados`;
      axios.get(url2).then(response => response.data)
      .then((data) => {
          this.setState({ classificados: data})
          console.log(this.state.classificados)
      })
  }


  render(){

    return (
        <div className="divCards">
         {this.state.classificados.map((classificado) => (
              <Card className="root">
              <CardHeader
                  className="CardHeader"
                  title={classificado.titulo}
                  subheader={classificado.data}
              />
              <CardContent className="CardContent">
                  <Typography variant="body2" color="textSecondary" component="p">
                  {classificado.descricao}
                  </Typography>
              </CardContent>
              </Card>
              ))}
      </div>
         
    )
  }
  
}

