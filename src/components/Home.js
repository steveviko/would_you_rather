import React, { Component } from 'react'
import { connect } from 'react-redux';
import Login from './Login';
import Questions from '../actions/Questions';

class Home extends Component {

  render() {
    const { authedUser } = this.props
    console.log('props', authedUser)
    return (
      <div>
        
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

export default connect(mapStateToProps)(Home)