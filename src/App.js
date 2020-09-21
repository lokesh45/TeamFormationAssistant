import React, { Component } from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import Home from './Home';
import Signup from './Signup';
import ProjectDetails from './ProjectDetails';
import './App.css';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      name:'',
    }
  }
  render(){
  return (
    <div>
    <Switch>
      {/* If the current URL is /Signup, this route is rendered
          while the rest are ignored */}
      <Route path="/TeamFormationAssistant/Signup/Success">
        <Signup formflag={true}/>
      </Route>
      <Route path="/TeamFormationAssistant/Signup">
        <Signup formflag={false} />
      </Route>
      {/* If the current URL is /ProjectDetails, this route is rendered
          while the rest are ignored */}
      <Route path="/TeamFormationAssistant/ProjectDetails/Success">
        <ProjectDetails formflag={true} />
      </Route>
      <Route path="/TeamFormationAssistant/ProjectDetails">
        <ProjectDetails  formflag={false} />
      </Route>

      {/* If none of the previous routes render anything,
          this route acts as a fallback.

          Important: A route with path="/" will *always* match
          the URL because all URLs begin with a /. So that's
          why we put this one last of all */}
      <Route path="/TeamFormationAssistant">
        <Home />
      </Route>
    </Switch>
  </div>
  );
  }
}

export default App;
