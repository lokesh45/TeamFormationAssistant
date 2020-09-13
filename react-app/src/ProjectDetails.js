import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './ProjectDetails.css';

class ProjectDetails extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      name:'',
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
    <div className="ProjectDetails" align = 'center'>
      <div className="headjs">
              <div align="center">
                  <br/>
                  <NavLink to="/Home" className="btn btn-primary">
                    Home
                  </NavLink>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <NavLink to="/Signup" className="btn btn-primary">
                    Signup
                  </NavLink>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <NavLink to="/ProjectDetails" className="btn btn-primary active">
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
          <h2 align="center">Project Details</h2>
      </div>
      <div className = "test">
        <div className="formblock">
          <form method= 'post' align = 'center' action = 'http://localhost:3001/ProjectDetails'>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="name" className="form-check-label">Project Name</label>
                  <input type="text" className="form-control" name = 'name' required />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="enddate" className="form-check-label">Project End Date</label>
                  <input type="date" className="form-control" name="enddate" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="teamsize" className="form-check-label">Team Size</label>
                  <input type="number" className="form-control" name = 'teamsize' required />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="budget" className="form-check-label">Budget (in dollars)</label>
                  <input type="number" className="form-control" name="budget" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="tools" className="form-check-label">Tools</label>
                  <input type="text" className="form-control" name = 'tools' required />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="priority" className="form-check-label">Priority 0(high) to 4(low)</label>
                  <select name="priority" className="form-control"  required>
                    <option defaultValue>4</option>
                    <option>3</option>
                    <option>2</option>
                    <option>1</option>
                    <option>0</option>
                  </select>
                </div>
              </div>
              <br/>
              <b>All weights should sum to 100%. Weightage is considered while allocating project resources</b>
              <div className="form-row">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="form-group col-md-2">
                  <label htmlFor="skillweight" className="form-check-label">Skill Weightage</label>
                  <input type="number" className="form-control" name = 'skillweight' required/>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="form-group col-md-2">
                  <label htmlFor="experienceweight" className="form-check-label">Experience Weightage</label>
                  <input type="number" className="form-control" name="experienceweight" required />
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="form-group col-md-2">
                  <label htmlFor="hoursweight" className="form-check-label">Hours Weightage</label>
                  <input type="number" className="form-control" name = 'hoursweight' required/>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="form-group col-md-2">
                  <label htmlFor="languageweight" className="form-check-label">Language Weightage</label>
                  <input type="number" className="form-control" name="languageweight" required />
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="form-group col-md-2">
                  <label htmlFor="budgetweight" className="form-check-label">Budget Weightage</label>
                  <input type="number" className="form-control" name="budgetweight" required/>
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

export default ProjectDetails;
