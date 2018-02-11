import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route,Switch} from 'react-router-dom'
import Postapi from './components/postapi';
import Postform from './components/postform'
import Postshow from './components/postshow'
class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
      <Route path='/post/new'  component = {Postform}/>
      <Route path='/post/:id'  component = {Postshow}/>
       <Route path='/' exact component = {Postapi}/>
      
       </Switch>
      </div>
    );
  }
}

export default App;
