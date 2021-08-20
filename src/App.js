import React, { Component, Fragment } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.scss';
import { connect } from 'react-redux'
import { handleInitialData } from './actions/common';
import { Container } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
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
    
    const { authedUser } = this.props
    const PrivateRoute = ( {component: Component, ...rest}) => (
      <Route {...rest} render={(props) => (
        authedUser !== null 
        ? <Component {...props} />
        : <Redirect to={{
          pathname: '/',
          state: { from: props.location }
        }} />
      )} />
    )

    return ( 

      <Router>
        <Fragment>
          <div className="App ui text container">
          {authedUser !== null && <Nav /> }
            <Container text>
              <Switch>
                    <PrivateRoute path='/leaderboard'  component={LeaderBoard} />
                    <PrivateRoute path='/new'  component={AskQuestion} />
                    <PrivateRoute path='/questions/:questionId'  component={Quest} />
                    <Route path='/' exact component={Home} />
                    <Route  component={NotFound} />
              </Switch>
            </Container>
          </div>
        </Fragment>
    </Router>
     );
  }
}
 
function mapStateToProps({authedUser}) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App);