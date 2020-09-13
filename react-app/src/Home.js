import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './Home.css';

class Home extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      name:'',
      languages:'',
      hourlyrate:'',
      dob:''
    }
  }
  handlChange= (event) =>{
    event.preventDefault();
    const {name, value} = event.target;
    this.setState({[name]:value});
    console.log(this.state);
  }
  render(){
  return (
    <div className="Home" align = 'center'>
      	<div className="headjs">
              <div align="center">
                  <br/>
                  <NavLink to="/Home" className="btn btn-primary active">
                    Home
                  </NavLink>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <NavLink to="/Signup" className="btn btn-primary">
                    Signup
                  </NavLink>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <NavLink to="/ProjectDetails" className="btn btn-primary">
                    ProjectDetails
                  </NavLink>
                  <h1>Team Formation Assistant</h1>
                  <p>Helps in forming teams using the team member and project requirements</p>
                  <br/>
                  <br/>
              </div>
      </div>
      <br/>
      <div className="midpart">
          <h2 align="center">Project Assignments by Assistant</h2>
      </div>
      <div className = "test">
      <div className="formblock" align = 'center'>
          <table>
            <thead>
              <th>id</th>
              <th>name</th>
            </thead>
            <tbody id="place-here"></tbody>
          </table>
        </div>
      </div>
    </div>
  );
  }
}

export default Home;
