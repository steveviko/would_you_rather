import React from 'react'
import { Progress, Segment} from 'semantic-ui-react'
import { getPercent } from '../utils/dataHelper'
import { Grid, Header, Image } from 'semantic-ui-react'


export default function ViewQuestion(props) {
  const {question, authedUser, author} = props
  const optionOneLength = question.optionOne.votes.length
  const optionTwoLength = question.optionTwo.votes.length
  const total = optionOneLength + optionTwoLength;
  const userVote = authedUser.answers[question.id]
  console.log('vq props: ',userVote)

  return (
    <div className='ui text container'>
        <Grid celled>
          <Grid.Row columns={1}>
            <Grid.Column>
              <Header as='h3'>Asked By {author.name}</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column width={4} verticalAlign='middle'>
              <Image src={author.avatarURL} style={{borderRadius: '50%'}}  />
            </Grid.Column>

            <Grid.Column width={12} verticalAlign='middle'>
              <Segment style={{positiion: 'relative'}} className={userVote === 'optionOne' ? 'user-vote' : '' }>
                <p style={{textAlign: 'left'}}>{question.optionOne.text}</p>
                <Progress style={{marginBottom: '1em'}}  color='green' percent={getPercent(optionOneLength,total)} progress />
                <p>{optionOneLength} out of {total} Votes</p>
              </Segment>

              <Segment style={{positiion: 'relative'}} className={userVote === 'optionTwo' ? 'user-vote' : '' }>
                <p style={{textAlign: 'left'}}>{question.optionTwo.text}</p>
                <Progress style={{marginBottom: '1em'}} color='green' percent={getPercent(optionTwoLength,total)} progress />
                <p>{optionTwoLength} out of {total} Votes</p>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    </div>
  )
}