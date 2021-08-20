import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Login from './Login';
import Questions from './Questions';

class Home extends Component {

  render() {
    const { authedUser } = this.props
    // console.log('props', authedUser)
    return (
      <div className='container'>
        
        {authedUser === null  ? (
          <Login />
        ) : (
          <Questions />
        )}
      </div>
    )
  }
}

function mapStateToProps({authedUser}) {
 return  {authedUser} 
}

export default withRouter(connect(mapStateToProps)(Home))