import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./ProjectDetails.css";

class ProjectDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formflag: this.props.formflag,
            teamMembers: [
                {
                    languagepreferred: "",
                    skill: "",
                    memberrole: "",
                    availablehoursperweek: "",
                    skillweight: "",
                    experienceweight: "",
                    hoursweight: "",
                    languageweight: "",
                    budgetweight: ""
                }
            ]
        };
    }
    handleChange = (e) => {
        
        console.log(this.state)
        var tempclassname = e.target.className.split(" ");
        console.log(tempclassname, e.target.dataset.id,e.target.className)
        if (["languagepreferred", "skill", "memberrole", "availablehoursperweek", "skillweight", "experienceweight", "hoursweight", "languageweight", "budgetweight"].includes(tempclassname[0]) ) {
            
            let teamMembers = [...this.state.teamMembers]
          teamMembers[e.target.dataset.id][tempclassname[0]] = e.target.value.toUpperCase()
          this.setState({ teamMembers }, () => console.log(this.state.teamMembers))
        } else {
          this.setState({ [e.target.name]: e.target.value.toUpperCase() })
        }
        
      }
    addmember = (e) => {
        console.log("Add member funtion");
        console.log(this.state)
        this.setState((prevState) => ({
          teamMembers: [...prevState.teamMembers, {
            languagepreferred: "",
            skill: "",
            memberrole: "",
            availablehoursperweek: "",
            skillweight: "",
            experienceweight: "",
            hoursweight: "",
            languageweight: "",
            budgetweight: ""
        }],
        }));
        console.log("Add member funtion end");
      }
      handleSubmit = (e) => { e.preventDefault() }
    render() {
        let { teamMembers } = this.state
        return (
            <div className="ProjectDetails" align="center">
                <div className="headjs">
                    <div align="center">
                        <br />
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
                        <p>
                            Helps in forming teams using the team member and project
                            requirements
                        </p>
                        <br />
                        <br />
                    </div>
                </div>
                <br />
                <div className="midpart">
                    <h2 align="center">Project Details</h2>
                </div>
                <Notify isShow={this.state.formflag} />
                <div className="test">
                    <div className="formblock">
                        <form
                            method="post"
                            align="center"
                            onChange={this.handleChange}
                            action = "http://localhost:3001/ProjectDetails"
                            >
                            <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="name" className="form-check-label">
                                Project Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    required
                                    />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="enddate" className="form-check-label">
                                Project End Date
                                </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    name="enddate"
                                    required
                                    />
                            </div>
                            </div>
                            <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="teamsize" className="form-check-label">
                                Team Size
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="teamsize"
                                    required
                                    />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="budget" className="form-check-label">
                                Budget (in dollars)
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="budget"
                                    required
                                    />
                            </div>
                            </div>
                            <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="tools" className="form-check-label">
                                Tools
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="tools"
                                    required
                                    />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="priority" className="form-check-label">
                                Priority 0(high) to 4(low)
                                </label>
                                <select name="priority" className="form-control" required>
                                    <option defaultValue>4</option>
                                    <option>3</option>
                                    <option>2</option>
                                    <option>1</option>
                                    <option>0</option>
                                </select>
                            </div>
                            </div>
                            {
                            teamMembers.map((val, idx) => {
                            let languagepreferredId = `languagepreferred-${idx}`,
                            skillId = `skill-${idx}`,
                            memberroleId = `memberrole-${idx}`,
                            availablehoursperweekId = `availablehoursperweek-${idx}`,
                            skillweightId = `skillweight-${idx}`,
                            experienceweightId = `experienceweight-${idx}`,
                            hoursweightId = `hoursweight-${idx}`,
                            languageweightId = `languageweight-${idx}`,
                            budgetweightId = `budgetweight-${idx}`;
                            return (
                            <div key={idx} >
                            <div className="test border border-dark rounded">
                                <b>Requirements for Team Member {idx + 1}</b>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label
                                        htmlFor={languagepreferredId}
                                        className="form-check-label"
                                        >{`Preferred Programming Language`}</label>
                                        <input
                                        type="text"
                                        name={languagepreferredId}
                                        data-id={idx}
                                        id={languagepreferredId}
                                        value={teamMembers[idx].languagepreferred}
                                        className="languagepreferred form-control"
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label
                                        htmlFor={skillId}
                                        className="form-check-label"
                                        >{`Skill`}</label>
                                        <input
                                        type="text"
                                        name={skillId}
                                        data-id={idx}
                                        id={skillId}
                                        value={teamMembers[idx].skill}
                                        className="skill form-control"
                                        />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label
                                        htmlFor={memberroleId}
                                        className="form-check-label"
                                        >{`Role`}</label>
                                        <input
                                        type="text"
                                        name={memberroleId}
                                        data-id={idx}
                                        id={memberroleId}
                                        value={teamMembers[idx].memberrole}
                                        className="memberrole form-control"
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label
                                        htmlFor={availablehoursperweekId}
                                        className="form-check-label"
                                        >{`Required Hours per Week`}</label>
                                        <input
                                        type="text"
                                        name={availablehoursperweekId}
                                        data-id={idx}
                                        id={availablehoursperweekId}
                                        value={teamMembers[idx].availablehoursperweek}
                                        className="availablehoursperweek form-control"
                                        />
                                    </div>
                                </div>
                                <h6>
                                    <b>
                                        All weights should sum up to 100. Allocate weight to each category. For example: Skill Weight: 20, Experience Weight: 25, Hours Weight: 15, Language Weight: 0, Budget Weight: 40
                                    </b>
                                </h6>
                                <div className="form-row">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <div className="form-group col-md-2">
                                        <label
                                        htmlFor={skillweightId}
                                        className="form-check-label"
                                        >{`Skill Weight`}</label>
                                        <input
                                        type="text"
                                        name={skillweightId}
                                        data-id={idx}
                                        id={skillweightId}
                                        value={teamMembers[idx].skillweight}
                                        className="skillweight form-control"
                                        />
                                    </div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <div className="form-group col-md-2">
                                        <label
                                        htmlFor={experienceweightId}
                                        className="form-check-label"
                                        >{`Experience Weight`}</label>
                                        <input
                                        type="text"
                                        name={experienceweightId}
                                        data-id={idx}
                                        id={experienceweightId}
                                        value={teamMembers[idx].experienceweight}
                                        className="experienceweight form-control"
                                        />
                                    </div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <div className="form-group col-md-2">
                                        <label
                                        htmlFor={hoursweightId}
                                        className="form-check-label"
                                        >{`Hours Weight`}</label>
                                        <input
                                        type="text"
                                        name={hoursweightId}
                                        data-id={idx}
                                        id={hoursweightId}
                                        value={teamMembers[idx].hoursweight}
                                        className="hoursweight form-control"
                                        />
                                    </div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <div className="form-group col-md-2">
                                        <label
                                        htmlFor={languageweightId}
                                        className="form-check-label"
                                        >{`Language Weight`}</label>
                                        <input
                                        type="text"
                                        name={languageweightId}
                                        data-id={idx}
                                        id={languageweightId}
                                        value={teamMembers[idx].languageweight}
                                        className="languageweight form-control"
                                        />
                                    </div>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <div className="form-group col-md-2">
                                        <label
                                        htmlFor={budgetweightId}
                                        className="form-check-label"
                                        >{`Budget Weight`}</label>
                                        <input
                                        type="text"
                                        name={budgetweightId}
                                        data-id={idx}
                                        id={budgetweightId}
                                        value={teamMembers[idx].budgetweight}
                                        className="budgetweight form-control"
                                        />
                                    </div>
                                </div>
                            </div>
                            <br/>
                            </div>
                            );
                            })}
                            <button type = "button" onClick={this.addmember} className="btn btn-dark">
                            Add new member
                            </button>
                            <br />
                            <br />
                            <br />
                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
const Notify = ({ isShow }) =>
    isShow ? (
        <p>
            <h4 align="center" className="h4seg">
                Form Received. Please visit Home Page after some time to view Project
                assignment.
      </h4>
        </p>
    ) : null;

export default ProjectDetails;
