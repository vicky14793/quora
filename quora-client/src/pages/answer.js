import React, { Component } from 'react';
//import { Container, Image, Menu, Grid } from 'semantic-ui-react';
import Menu1 from './../components/menu';
//import Grid from '@material-ui/core/Grid';
import Grid2 from './../components/gridquestions';
import './answer.css';
class Answer extends Component {
  render () {
    return (

    <div>
      <Menu1 routes={this.props} />
      <div className= "ans">
      <Grid2 />
      </div>
      </div>
        )
    }
  }



  export default Answer;
