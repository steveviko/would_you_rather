import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.scss';
import { connect } from 'react-redux'
import { handleInitialData } from './actions/common';
import { BrowserRouter as Router, Route,Switch, withRouter } from 'react-router-dom'
import Home from './components/Home';
import Nav from './components/Nav';
import LeaderBoard from './components/LeaderBoard';
import AskQuestion from './components/AskQuestion';
import NotFound from './components/NotFound';
import Quest from './components/Quest';


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
      <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/leaderboard'  component={LeaderBoard} />
            <Route path='/new'  component={AskQuestion} />
            <Route path='/questions/:questionId'  component={Quest} />
            <Route  component={NotFound} />
         </Switch>
      </div>
    </Router>
     );
  }
}
 
export default connect()(App);