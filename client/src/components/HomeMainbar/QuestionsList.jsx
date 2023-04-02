import React from 'react'
import Questions from './Questions'

const QuestionsLisst = (questionsList) => {
  return (
    <>
    {
      questionsList.map((question) => (
        <Questions question={question} key={question.id} />   
      ))}
    </>
  )
}

export default QuestionsLisst
