import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Form, Select, Grid, Header, Segment } from 'semantic-ui-react'
import { initAuthedUser } from '../actions/authedUser';
import { Redirect } from 'react-router-dom'
import { TEMP_ID } from '../actions/common';


class Login extends Component { 
  state = {

    value : "",
    redirectToReferrer: false
  }
  handleChange = (e, { value }) => this.setState({ value })
  handleSubmit = (e) => {
    e.preventDefault();
    const { value } = this.state;
    this.props.dispatch(initAuthedUser(value));
    this.setState({ redirectToReferrer: true })

  }


  render() {
    
    const {userArray, authedUser} = this.props;
    const {value, redirectToReferrer} = this.state;
    const { from } = this.props.location.state || { from: { pathname: '/' } }

    if (redirectToReferrer === true) {
      return <Redirect to={from} />
    }

    if (authedUser !== TEMP_ID) {
      return <Redirect to='/' />
    }
    
    return (
     
        <Grid verticalAlign='middle' style={{ height: '100vh', justifyContent: 'center' }}>
        <Grid.Column style={{ maxWidth: 500 }}>
        <Form size='large' onSubmit={this.handleSubmit}>
          <Segment>
            <Header as='h2'>
            Would You Rather Web App
            </Header>
            <p style={{font:'bolder', textTransform:"uppercase"}}>Sign In</p>
            <Form.Field>
              <Select placeholder='Select User'  onChange={this.handleChange} options={userArray} />
            </Form.Field>
            <Form.Button  disabled={value === ''} type='submit' style={{background:"green",color:"white"}}>Login</Form.Button>
            </Segment>
        </Form>

        </Grid.Column>
      </Grid>
    )
  }
}

function mapStateToProps({users, authedUser}) {
  // format user data for selected box
  const userOptions = Object.keys(users).map(user => {
    return { 
      key: users[user].id,
      text: users[user].name,
      value: users[user].id
    }
  })

  return {
    userArray: userOptions,
    authedUser
  }
}

export default connect(mapStateToProps)(Login)