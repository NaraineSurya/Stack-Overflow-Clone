import React from 'react'
import { Link } from 'react-router-dom'

const Questions = ({question}) => {
  // return (
  //   <div className='display-ans-container'>
  //     <div className="display-votes-ans">
  //       <p>{question.votes}</p>
  //       <p>votes</p>
  //     </div>
  //     <div className="display-votes-ans">
  //       <p>{question.noofAnswers}</p>
  //       <p>Answers</p>
  //     </div>
  //     <div className="display-question-details">
  //       <Link to={`/Questions/${question.id}`} className='question-title-link'>{question.qustionTitle}</Link>
  //       <div className="display-tags-time">
  //         <div className="display-tags">
  //           {
  //             question.questionTags.map((tag) => {
  //               <p key={tag}>{tag}</p>
  //             })
  //           }
  //         </div>
  //         <p className='disply-time'>
  //           asked {question.askedOn} {question.UserPosted}
  //         </p>
  //       </div>
  //     </div>
    
  //   </div>
  // )
}

export default Questions
