import React from 'react';
import Menu1 from './components/menu';
import Signin from './components/signin';
import Register from './components/register';
import Grid1 from './components/grid';
import Home from './pages/home';
import Answer from './pages/answer';
import Textarea from './components/textarea';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Image, } from 'semantic-ui-react';

// import logo from './logo.svg';
import './App.css';

function App() {
  return (


    <div>

      <Router>
  <Route exact path = "/"  component = {Signin} />
  <Route path = "/register" component = {Register} />
  <Route path = "/home" component = {Home} />
  <Route path = "/answer" component = {Answer} />
  <Route path = "/textarea"component = {Textarea} />
      </Router>
    </div>
  );
}

export default App;
