import React, { Component } from 'react';
import { Container, Image, Menu, Message } from 'semantic-ui-react';
import './register.css';
import axios from 'axios';
import { connect } from 'react-redux';
import {register1} from './../actions/actions_auth'
import PropTypes from 'prop-types'

import {BrowserRouter as Router, Route } from 'react-router-dom';

class Register extends Component{
  constructor(props){
    super(props);
    this.state = {

        Firstname: '',
        Lastname: '',
        email: '',
        password: '',
        phone: '',
        res1: ''

    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e){
    this.setState({...this.state, [e.target.name]: e.target.value});
  }

  onSubmit(e){

    // modify
    // let data = {}

    axios.post('url', this.state)
      .then(
        response => {
          console.log(response)
        }
      ).catch(
        error => {
          console.log(error)
          console.log(error.response)
        }
      )






    this.props.register1(this.state).then(
      respo =>  {
        console.log(respo.payload)
        this.setState({res1: respo.payload})
      }
    ).catch(
      error => {
        console.log(error)
    },
    setTimeout(() => {
    this.setState({
      res1: ''
    });
  }, 5000)
    );
    e.preventDefault();
    this.setState({Firstname: '',
    Lastname: '',
    email: '',
    password: '',
    phone: ''})

  }
  render(){
    return(
<div className='Login-component1'>
      <div class="ui middle aligned center aligned grid">
  <div class="column">
    <font size="200" color="red">
      <div class="content">
      <br />  Quora
      </div>
    </font>
    <br />
    <form onSubmit = {this.onSubmit} class="ui large form">
          <div class="ui stacked secondary  segment">
          <div class="field">

             <input
              value= {this.state.Firstname}
              onChange = {this.onChange}
              type="text" name="Firstname" placeholder="Firstname" />

          </div>
          <div class="field">

              <input
               value= {this.state.Lastname}
               onChange = {this.onChange}
               type="text" name="Lastname" placeholder="Lastname" />

          </div>
            <div class="field">

                <input
                value= {this.state.email}
                onChange = {this.onChange}
                type="text" name="email" placeholder="E-mail address" />

            </div>
            <div class="field">

                <input
                value= {this.state.password}
                onChange = {this.onChange}
                type="password" name="password" placeholder="Password" />

            </div>
            <div class="field">

                <input
                value= {this.state.phone}
                onChange = {this.onChange}
                type="text" pattern="[0-9]{10}" name="phone" placeholder="Phone Number" />

            </div>
            <button type="submit" className = "btn btn-primary btn-lg" >
              Submit
            </button>
            <br/>
            {this.state.res1 &&

              <Message positive>
     <Message.Header>Login Error:</Message.Header>
     <p>{this.state.res1}</p>
   </Message>
            }


          </div>



        </form>
      </div>
    </div>
</div>
    )
  }
}





Register.propTypes = {
  register1: PropTypes.func
}


export default connect(null, {register1})(Register);
