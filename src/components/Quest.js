import React, { Component } from 'react'
import { connect } from 'react-redux';
import AnswerQuestion from './AnswerQuestion';
import NotFound from './NotFound';
import ViewQuestion from './ViewQuestion';




class Quest extends Component {


  render() {
    
    if (this.props.authedUser === null) {
      
    } else {
      const {user, questionId, questions, questionAuthor} = this.props
      const isQuestionValid = Object.keys(questions).includes(questionId)
      const notAnswered = Object.keys(user.answers).includes(questionId);
     
      if ( isQuestionValid === false) {
        return <NotFound />
        }
    

   
    return (
     
      <div>        
         {notAnswered ? (
           <ViewQuestion question={questions[questionId]} authedUser={user} author={questionAuthor} />
         ) : (
           <AnswerQuestion  qid={questionId} />
         )}
        </div>
    )
  }
}
}

function mapStateToProps({authedUser,users,questions}, ownProps) {
  const {questionId} = ownProps.match.params
  const user = users[authedUser]
  const question = questions[questionId]
  const questionAuthor = users[question.author]

  
  return {
    authedUser,
    user,
    questionId,
    questions,
    questionAuthor
  }
}

export default connect(mapStateToProps)(Quest)