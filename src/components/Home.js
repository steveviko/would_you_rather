import React, { Component,Fragment} from 'react'
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import Login from './Login';
import Questions from './Questions';

class Home extends Component {

  render() {
    const { authedUser } = this.props
    
    return (
      <Fragment>
        
        {authedUser === null  ? (
          <Login />
        ) : (
          <Questions />
        )}
   </Fragment>
    )
  }
}

function mapStateToProps({authedUser}) {
 return  {authedUser} 
}

export default connect(mapStateToProps)(Home)