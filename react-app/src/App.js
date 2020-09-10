import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import './App.css';

class App extends Component {
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
        <Home />
      </React.StrictMode>,
      document.getElementById('root')
    );
  }
  render(){
  return (
    <div className="App" align = 'center'>
      	<div className="headjs">
              <div align="center">
                  <br/>
                  <button type="link" class="getbutton" onClick={this.handleClick}>
		        	    <b>Home</b>
                  </button>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <button type="link" class="getbutton">
		        	    <b>Sign Up</b>
                  </button>
                  <h1>Team Formation Assistant</h1>
                  <p>Helps in forming teams using the team member and project requirements</p>
                  <br/>
                  <br/>
              </div>
      </div>
      <div className="midpart">
          <h2 align="center">Team Member Details (Sign Up)</h2>
      </div>
      <div class = "test">
      <div className="formblock">
        <form method= 'post' align = 'center' action = 'https://localhost:3001'>
          <div className= 'name'>
            <label htmlFor= 'name'>Name: </label>
            <br/>
            <input type = 'text' name = 'name' required onChange={this.handlChange}/>
          </div>
          <div className= 'languages'>
            <label htmlFor= 'languages'>Languages: </label>
            <br/>
            <input type = 'text' name = 'languages' required onChange={this.handlChange}/>
          </div>
          <div className= 'hourlyrate'>
            <label htmlFor= 'hourlyrate'>HourlyRate: </label>
            <br/>
            <input type = 'number' name = 'hourlyrate' required onChange={this.handlChange}/>
          </div>
          <div className= 'dob'>
            <label htmlFor= 'dob'>Date of Birth: </label>
            <br/>
            <input type = 'date' name = 'dob'  required onChange={this.handlChange}/>
          </div>
          <br/>
          <div className= 'submit'>
            <input type = 'submit' />
          </div>
        </form>
        </div>
      </div>
    </div>
  );
  }
}

export default App;
