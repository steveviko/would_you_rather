import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Segment, Grid, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class Question extends Component {

  render() {

    const {author, optionOne, optionTwo} = this.props.question;

    return (
      <li>
        <p>{author} Asks:</p>
        <h2>Would You Rather</h2>

        <Link to={`/questions/${this.props.id}`}>
          <Segment>
            <Grid columns={2} relaxed='very' stackable>
              <Grid.Column>
                <p >{optionOne.text}</p>
              </Grid.Column>
              <Grid.Column verticalAlign='middle'>
                <p>{optionTwo.text}</p>
              </Grid.Column>            
            </Grid>
            <Divider vertical>OR</Divider>
          </Segment>
        </Link>
      </li>
    )
  }
}

function mapStateToProps({users,questions, authedUser },ownProps){
  const question = questions[ownProps.id]

  return {
    question,    
    authedUser
  }
}



export default connect(mapStateToProps)(Question)