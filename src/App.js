import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.scss';
import { connect } from 'react-redux'
import { handleInitialData } from './actions/shared';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home';
import Nav from './components/Nav';
import LeaderBoard from './components/LeaderBoard';


class App extends Component {
  state = {  }

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render() {    
    return ( 

      <Router>
      <div className="App">
      <Nav />
          <Route path='/' exact component={ Home} />
          <Route path='/leaderboard'  component={LeaderBoard} />
      </div>
    </Router>
     );
  }
}
 
export default connect()(App);