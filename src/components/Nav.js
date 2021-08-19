import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import { initAuthedUser } from '../actions/authedUser';



class Nav extends Component {

  logOut = (e) => {
    e.preventDefault()
    console.log('logout')
    this.props.dispatch(initAuthedUser(null))
  }
  
  render() {
    return (
      
      <div className='container'>
        <Menu pointing secondary>
          <Menu.Item  activeClassName='active' as={NavLink} exact to='/'>
            Home
          </Menu.Item>
          <Menu.Item activeClassName='active' as={NavLink} to='/leaderboard' >
            LeaderBoard
          </Menu.Item>
          <Menu.Menu position='right'>
          <Menu.Item as={Link} to='/'>
            {this.props.authedUser === null  ? <span>Log in</span> : <span onClick={this.logOut}>Log out</span>}
          </Menu.Item>
          </Menu.Menu>
        </Menu>
        
     </div>
    )
  }
}

function mapStateToProps({ authedUser}) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(Nav)