import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Home.css';
import App from './App';

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
  handleClick= (event) =>{
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );
  }
  render(){
  return (
    <div className="Home" align = 'center'>
      	<div className="headjs">
              <div align="center">
                  <br/>
                  <button type="link" class="getbutton" >
		        	    <b>Home</b>
                  </button>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <button type="link" class="getbutton" onClick={this.handleClick}>
		        	    <b>Sign Up</b>
                  </button>
                  <h1>Team Formation Assistant</h1>
                  <p>Helps in forming teams using the team member and project requirements</p>
                  <br/>
                  <br/>
              </div>
      </div>
      <div className="midpart">
          <h2 align="center">Project Assignments by Assistant</h2>
      </div>
      <div class = "test">
      <div className="formblock" align = 'center'>
          <table id="Results">
            <tr>
              <th>Member Name</th>
              <th>Project Name</th> 
            </tr>
            <tr>
              <td>Smith</td>
              <td>DS</td>
            </tr>
            <tr>
              <td>Lokesh</td>
              <td>ADA</td>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>Algos</td>
            </tr>
          </table>

        </div>
      </div>
    </div>
  );
  }
}

export default Home;
