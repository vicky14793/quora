import React, { Component } from 'react';
import { Container, Image, Menu, Message } from 'semantic-ui-react';
import './signin.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux';
import {signin1} from './../actions/actions_auth'
import PropTypes from 'prop-types'



class Signin extends Component{
  constructor(props){
    super(props);
    this.state = {

        email: '',
        password: '',
        error1: ''


    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e){
    this.setState({...this.state, [e.target.name]: e.target.value});
  }

  onSubmit(e){

    this.props.signin1(this.state)
      .then(
        response =>  {
          this.props.history.push('/home')
        }
      ).catch(
        error => {
          this.setState({error1: error.response.data})
      },
      setTimeout(() => {
      this.setState({
        error1: ''
      });
    }, 5000)
      )
      e.preventDefault();
      this.setState({email: '',
      password: ''})
  }
  render(){
    return(
<div className='Signin-component'>
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
              <div class="ui left icon input">
                <i class="user icon"></i>
                <input
                value= {this.state.email}
                onChange = {this.onChange}
                type="text" name="email" placeholder="E-mail address" />
              </div>
            </div>
            <div class="field">
              <div class="ui left icon input">
                <i class="lock icon"></i>
                <input
                value= {this.state.password}
                onChange = {this.onChange}
                type="password" name="password" placeholder="Password" />
              </div>
            </div>
            <button type="submit" className = "btn btn-primary btn-lg" >
              Submit
            </button>
            <br/>
            {this.state.error1 &&

              <Message negative>
     <Message.Header>Login Error:</Message.Header>
     <p>{this.state.error1}</p>
   </Message>
            }
          </div>

          <div class="ui error message"></div>

        </form>

        <div class="ui message">
          New to us? <Link to ='/register' >Register</Link>

        </div>
      </div>
    </div>
</div>
    )
  }
}





Signin.propTypes = {
  signin1: PropTypes.func
}


export default connect(null, {signin1})(Signin);
