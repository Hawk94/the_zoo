import React from 'react';
import { Link } from 'react-router-dom';
// import Home from './Home.js';

var Home = React.createClass({
  render: function() {
      return (
        <div>
          <h2>HELLO</h2>
          <p>Cras facilisis urna ornare ex volutpat, et
          convallis erat elementum. Ut aliquam, ipsum vitae
          gravida suscipit, metus dui bibendum est, eget rhoncus nibh
          metus nec massa. Maecenas hendrerit laoreet augue
          nec molestie. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus.</p>
  
          <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
        </div>
      )
    }
    });

var App = React.createClass({
  render: function() {
    return (
    <div>
      <h1>The Zoo.</h1>
      <ul className="header">
        <li><Link to="/" activeClassName="active">Home</Link></li>
        <li><Link to="/stuff" activeClassName="active">Stuff</Link></li>
        <li><Link to="/contact" activeClassName="active">Contact</Link></li>
      </ul>

      <hr/>

      <div className='content'>
        <h2>HELLO</h2>
        <p>Cras facilisis urna ornare ex volutpat, et
        convallis erat elementum. Ut aliquam, ipsum vitae
        gravida suscipit, metus dui bibendum est, eget rhoncus nibh
        metus nec massa. Maecenas hendrerit laoreet augue
        nec molestie. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.</p>

        <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
      </div>

    </div>
  )
}
});
export default App