import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './Home.css';
import * as ReactBootstrap from "react-bootstrap";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };

}


componentDidMount() {
  debugger;
  fetch('http://localhost:5000/executeAlgo');
  const apiUrl = 'http://localhost:3001/getResults';
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => this.setState({data: data}));
  var newData = this.state.data.concat([this.state.data]);  
  this.setState({data: newData})
    
}

 renderTeam(response, index){
    return(
      <tr key={index}>
        <td>{response.ProjectId}</td>
        <td>{response.ProjectName}</td>
        <td>{response.MemberId}</td>
        <td>{response.MemberName}</td>
      </tr>
    )
  }

  render(){
    console.log(this.state)
  return (
    <div className="Home" align = 'center'>
      	<div className="headjs">
              <div align="center">
                  <br/>
                  <NavLink to="/TeamFormationAssistant/Home" className="btn btn-primary active">
                    Home
                  </NavLink>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <NavLink to="/TeamFormationAssistant/Signup" className="btn btn-primary">
                    Signup
                  </NavLink>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <NavLink to="/TeamFormationAssistant/ProjectDetails" className="btn btn-primary">
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
            <ReactBootstrap.Table striped bordered hover>
              <thead class="thead-dark">
                <tr>
                  <th>Project ID</th>
                  <th>Project Name</th>
                  <th>Member ID</th>
                  <th>Member Name</th>
                </tr>
              </thead>
              <tbody>
                {this.state.data.map(this.renderTeam)}
              </tbody>
            </ReactBootstrap.Table>
        </div>
      </div>
    </div>
  );
  }
}
export default Home;