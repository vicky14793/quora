import React, { Component } from 'react';
import { Grid, Image, Segment, Container, Message } from 'semantic-ui-react'
import './textarea.css';
import axios from 'axios';
import { connect } from 'react-redux';
import {question1} from './../actions/actions_questions'
import PropTypes from 'prop-types'
import Menu1 from './menu';
class Textarea extends Component {
  constructor(props){
    super(props);
    this.state = {

        category: '',
        description: ''

    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e){
    this.setState({...this.state, [e.target.name]: e.target.value});
  }

  onSubmit(e){
    console.log(this.props)

    this.props.question1(this.state).then(
      respo1 =>  {
        console.log(respo1.payload)
        this.setState({res2: respo1.payload})
      },
      setTimeout(() => {
      this.setState({
        res2: ''
      });
    }, 5000)
    ).catch(
      error => {
        console.log(error)
    }
    );
       e.preventDefault();
      this.setState({
        category: '',
      description: ''})

  }
  render () {

    return (

<div>
<div><Menu1 routes={this.props} /></div>
<form onSubmit = {this.onSubmit} className="ui reply form" enctype="multipart/form-data">
<div className="dropdown1">
  <select
  value= {this.state.category}
  onChange = {this.onChange}
  name="category"
  className="dropdown">
<option>Question Category</option>
<option>Food</option>
<option>Science</option>
   </select>
       </div>

          <div className="field1" >

        <input
        autocomplete="off"
        value= {this.state.description}
        onChange = {this.onChange}
        name="description"
        className="style1" type="text" placeholder="question"  />
        </div>
        <button type="submit" className = "mybutton" >
          Add Question
        </button>
        <br/>
        {this.state.res2 &&

          <Message positive>
 <Message.Header>Success:</Message.Header>
 <p>{this.state.res2}</p>
</Message>
        }
      </form>
</div>
      )
   }
}


Textarea.propTypes = {
  question1: PropTypes.func
}


export default connect(null, {question1})(Textarea);
