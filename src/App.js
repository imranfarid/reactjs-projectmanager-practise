import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount(){
      this.setState({
          projects : [
          {
            title: 'Tesla',
            category: 'EV',
          },
          {
            title: 'Supra',
            category: 'Tuner',
          },
          {
            title: 'Lamborghini',
            category: 'Exotic',
          }
      ]});

  }

  render() {
    return (
      <div className="App">
        <AddProject />
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
