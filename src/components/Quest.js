import React, { Component } from 'react'
import { connect } from 'react-redux';



class Quest extends Component {


  render() {
    
    if (this.props.user !== undefined) {
      const {user, questionId, questions} = this.props
      const isQuestionValid = Object.keys(questions).includes(questionId)
      const notAnswered = Object.keys(user.answers).includes(questionId);
     

    }

   
    return (

     
      <div>

       
        Question component

      </div>
    )
  }
}

function mapStateToProps({authedUser,users,questions}, ownProps) {
  const {questionId} = ownProps.match.params
  const user = users[authedUser]
  console.log('logging user in mapStateToProps: ', user)

  
  return {
    authedUser,
    user,
    questionId,
    questions
  }
}

export default connect(mapStateToProps)(Quest)