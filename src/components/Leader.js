import React from 'react'
import { Table } from 'semantic-ui-react'

export default function Leader(props) {  
  const {  name, avatarURL, numAnswers, total,numQuestions } = props.data
  return (
    <Table.Row>
      <Table.Cell>{name}</Table.Cell>
      <Table.Cell style={{verticalAlign: 'middle'}}>
        <div style={{display: 'flex'}}>
          <img src={avatarURL} alt={name} style={{width: '40px', height: '40px', borderRadius: '50%'}} />
          <p style={{paddingLeft: '20px'}}> </p></div></Table.Cell>
       <Table.Cell>{numQuestions}</Table.Cell>
      <Table.Cell>{numAnswers}</Table.Cell>
      <Table.Cell style={{fontWeight: 'bolder'}}>{total}</Table.Cell>
    </Table.Row>
  )
}