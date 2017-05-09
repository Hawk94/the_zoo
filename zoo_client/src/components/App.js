// import React from 'react'
// import Footer from './Footer'
// import AddTodo from '../containers/AddTodo'
// import VisibleTodoList from '../containers/VisibleTodoList'
// import './App.css';
// 
// const App = () => (
//   <div>
//     <AddTodo />
//     <VisibleTodoList />
//     <Footer />
//   </div>
// )
// 
// export default App

import React, { Component } from 'react';
import logo from './logo.svg';
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>ToDo</h2>
        </div>
        <p className="App-intro">
          <AddTodo />
          <VisibleTodoList />
          <Footer />
          </p>
      </div>
    );
  }
}

export default App;