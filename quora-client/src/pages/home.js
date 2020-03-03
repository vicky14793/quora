import React, { Component } from 'react';
//import { Container, Image, Menu, Grid } from 'semantic-ui-react';
import Menu1 from './../components/menu';
import Menu2 from './../components/menu2';
import Grid1 from './../components/grid';
import './home.css';

class Home extends Component {
  render () {
    return (

    <div>
      <div> <Menu1 routes={this.props}/> </div>
      <div className="abc">
      <Menu2 /> <Grid1 />
      </div>






      </div>

        )
    }
  }



  export default Home;
