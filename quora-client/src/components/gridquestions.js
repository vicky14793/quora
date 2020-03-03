import React, { Component } from 'react';
import { Grid, Image, Segment, Container } from 'semantic-ui-react'
import './gridquestions.css';
import axios from 'axios';
import { connect } from 'react-redux';
import {question2} from './../actions/actions_questions'
import PropTypes from 'prop-types'
class Grid2 extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.question2()
  }


 render () {
    return (
      <div className="gri1">
       <Grid stackable rows={1}>
          <Grid.Column >
             <div className="pad">
                <Segment className="quest">
                   <p className= "para" > Questions For You </p>
                </Segment>
             </div>
          </Grid.Column>
       </Grid>
       <div class="ui segments">
          {
            this.props.questions.map(question =>  {
              return (
                <div class="ui segment" key={question._id}>
                  <p className= 'cat'> Question added . {question.category} </p>
                   <p> {question.description} </p>
                </div>
              )
            })
          }


       </div>
      </div>
      )
   }
}

Grid2.propTypes = {
  question2: PropTypes.func,
  questions: PropTypes.array
}

function mapStateToProps (state) {
  return {
    questions: state.questionfetch.question2
  }
}

export default connect(mapStateToProps, {question2})(Grid2);
