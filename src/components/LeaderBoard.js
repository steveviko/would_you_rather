import React, { Component } from 'react'
import { connect } from 'react-redux';
import Leader from './Leader';
import { Table } from 'semantic-ui-react'

 class LeaderBoard extends Component {
  render() {
    const { leaderBData } = this.props;
    return (
      <div className='container'>
      <Table celled padded unstackable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Users</Table.HeaderCell>
          <Table.HeaderCell>Questions</Table.HeaderCell>
          <Table.HeaderCell>Answers</Table.HeaderCell>
          <Table.HeaderCell>Totals</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {leaderBData.map(lb => {
          return <Leader key={lb.id} data={lb} />
        })}
      </Table.Body>


      </Table>

    </div>
  )
}
}

function mapStateToProps({users}) {
const leaderBData = Object.keys(users).map((user) => {
  let numAnswers = Object.keys(users[user].answers).length;
  let numQuestions = Object.keys(users[user].questions).length;
  
  let data = {
    'numAnswers': numAnswers,
    'numQuestions': numQuestions,
    'total' : numAnswers + numQuestions
  }
  return Object.assign( users[user], data)
  }).sort((a,b) => b.total - a.total);

return {
  'leaderBData': leaderBData
}
}

export default connect(mapStateToProps)(LeaderBoard)