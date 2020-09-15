import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './Signup.css';

class Signup extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      formflag: this.props.formflag
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
    <div className="Signup" align = 'center'>
      <div className="headjs">
              <div align="center">
                  <br/>
                  <NavLink to="/Home" className="btn btn-primary">
                    Home
                  </NavLink>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <NavLink to="/Signup" className="btn btn-primary active">
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
          <h2 align="center">Team Member Details (Sign Up)</h2>
      </div>
      <Notify isShow={this.state.formflag} />
      <div className = "test">
        <div className="formblock">
          <form method= 'post' align = 'center' action = 'http://localhost:3001/Signup'>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="name" className="form-check-label">Name</label>
                  <input type="text" className="form-control" name = 'name' required />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="dob" className="form-check-label">Date of Birth</label>
                  <input type="date" className="form-control" name="dob" required/>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="languages" className="form-check-label">Languages</label>
                  <input type="text" className="form-control" name = 'languages' required />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="hourlyrate" className="form-check-label">Hourly Rate (in dollars)</label>
                  <input type="number" className="form-control" name="hourlyrate" required/>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="memberrole" className="form-check-label">Role</label>
                  <select name="memberrole" className="form-control"  required>
                    <option defaultValue>Choose</option>
                    <option>Frontend Software Engineer</option>
                    <option>Backend Software Engineer</option>
                    <option>Full Stack Software-Backend</option>
                    <option>DevOps Engineer</option>
                    <option>Data Engineer</option>
                    <option>Project Manager</option>
                    <option>Project Lead</option>
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="experience" className="form-check-label">Experience (in years)</label>
                  <input type="number" className="form-control" name="experience" required/>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="skillscore" className="form-check-label">Skill/Assesment Score</label>
                  <input type="number" className="form-control" name = 'skillscore' required/>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="availablehoursperweek" className="form-check-label">Available Hours (per week)</label>
                  <input type="number" className="form-control" name="availablehoursperweek" required/>
                </div>
              </div>
              <input type = 'submit' />
            </form>
        </div>
      </div>
    </div>
  );
  }
}

const Notify = ({ isShow }) =>
  isShow ? <p><h4 align="center" className = "h4seg">Form Received. Please visit Home Page after some time to view Project assignment.</h4></p> : null;

export default Signup;
