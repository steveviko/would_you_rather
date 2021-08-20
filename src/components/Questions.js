import React, { Component } from 'react'
import {connect} from 'react-redux';
import { Tab, Item } from 'semantic-ui-react';
import Question from './Question';

class Questions extends Component {
  state = {
    showUnanswered: true
  }
  toggleDisplay = () => {
    this.setState((prevState) => ({
      showUnanswered: !prevState.showUnanswered
    }))
  }
  render() {

    const {questionIds, authedUser,answeredQuestions, unAnsweredQuestions } = this.props
    const { showUnanswered } = this.state
    const btnText = showUnanswered ? 'Answered' : 'Unanswered';
    const questionList = showUnanswered
    ? questionIds.filter(id => authedUser.answers[id] === undefined)
    : questionIds.filter(id => authedUser.answers[id] !== undefined);

    const panes = [
      { menuItem: 'Unaswered',
       render: () => (<Tab.Pane>
         <Item.Group>
          {unAnsweredQuestions.length === 0 && <p>You have answered all the questions!</p>}
          {unAnsweredQuestions.map(qid => (<QuestionListItem key={qid} id={qid} buttonText='Vote Here' />))}
         </Item.Group>
       </Tab.Pane>)
      },
      { menuItem: 'Answered',
      render: () => (<Tab.Pane>
        <Item.Group>
         {answeredQuestions.map(qid => (<QuestionListItem key={qid} id={qid} buttonText='See Results' />))}
        </Item.Group>
      </Tab.Pane>)
     },
    ]

    return (
      <div className='container'>
        <Tab panes={panes} />
        {questionList.map( question => {
          return <Question key={question} id={question} />
        })}


       
      </div>
    )
  }
}

function mapStateToProps({questions, authedUser, users }) {

  const user = users[authedUser]

  const answeredQuestions = Object.keys(questions)
    .filter(id => user.answers[id] !== undefined)
    .sort((a,b) => questions[a].timestamp - questions[b].timestamp)

  const unAnsweredQuestions = Object.keys(questions)
    .filter(id => user.answers[id] === undefined)
    .sort((a,b) => questions[a].timestamp - questions[b].timestamp)

  return {
    authedUser: users[authedUser],
    questionIds: Object.keys(questions),
    answeredQuestions,
    unAnsweredQuestions

  }
}


export default connect(mapStateToProps)(Questions)