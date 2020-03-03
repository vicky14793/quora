import React, { Component } from 'react';
import { Grid, Image, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './grid.css';

class Grid1 extends Component {

  render () {

    return (
<div className="gri">
<Grid stackable rows={1}>
    <Grid.Column>
      <Segment className="seg1">
        <p className="username"> Vicky Nagar </p>
        <p className="question"><Link className= "link2" to="/textarea">What is your question?</Link> </p>
      </Segment>
      <Segment>
        <p> ABCS ldhlqdhlwdkhwldlqhdlq
        hkhdkjhqkjwdkjbq</p>

      </Segment>
    </Grid.Column>

  </Grid>
</div>
      )
   }
}


export default Grid1;
