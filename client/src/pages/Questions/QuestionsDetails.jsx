import React from 'react'
import { Link, useParams } from 'react-router-dom'

import upVote from '../../assets/sort-up.svg'
import downVote from '../../assets/sort-down.svg'
import './QuestionsDetails.css'
import Avatar from '../../components/Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer'

const QuestionsDetails = () => {

    const { id } = useParams()

    var questionsList = [{
        id: '1',
        upVotes: 3,
        downVotes: 2,
        noOfAnswers: 2,
        questionTitle: "What is a function",
        questionBody: "It mean to be",
        QuestionTags: ["java", "node js" , "react js", "mongodb"],
        userPosted: "mano",
        askedOn: "jan 1",
        answeredOn: "jan3",
        answer: [{
            answerBody: "Answer",
            userAnswered: "kumar",
            answeredON: "jan2",
            userId: 2,
        }]
      },{
        id: '2',
        upVotes: 3,
        downVotes: 2,
        noOfAnswers: 5,
        questionTitle: "What is a function",
        questionBody: "It mean to be",
        QuestionTags: ["javascript", "R" , "python"],
        userPosted: "mano",
        askedOn: "jan 1",
        answeredOn: "jan3",
        answer: [{
            answerBody: "Answer",
            userAnswered: "kumar",
            answeredON: "jan2",
            userId: 2,
        }]
      }, {
        id: '3',
        upVotes: 3,
        downVotes: 2,
        noOfAnswers: 5,
        questionTitle: "What is a function",
        questionBody: "It mean to be",
        QuestionTags: ["javascript", "R" , "python"],
        userPosted: "mano",
        askedOn: "jan 1",
        answeredOn: "jan3",
        answer: [{
            answerBody: "Answer",
            userAnswered: "kumar",
            answeredON: "jan2",
            userId: 2,
        }]
      }]

  return (
    <div className='question-details-page'>
      {
        questionsList === null ?
        <h1>Loading</h1> :
        <>
            {
                questionsList.filter(question => question.id === id).map(question => (
                  <div key={question.id}>
                     <section className='question-details-conatiner'>
                        <h1>{question.questionTitle}</h1>
                        <div className='question-details-container-2'>
                            <div className="question-votes">
                                <img src={upVote} alt="" width='18' />
                                <p>{question.upVotes - question.downVotes}</p>
                                <img src={downVote} alt="" width='18' />
                            </div>
                            <div style= {{width: "100%"}}>
                                <p className='question-body'>{question.questionbody}</p>
                                <div className="question-details-tags">
                                    {
                                        question.QuestionTags.map((tag) =>(
                                            <p key={tag}>{tag}</p>
                                        ))
                                    }
                                </div>
                                <div className="question-action-user">
                                    <div>
                                        <button type='button'>Share</button>
                                        <button type='button'>Delete</button>
                                    </div>
                                    <div >
                                        <p>asked {question.askedOn}</p>
                                        <Link to={`/User/${question.userId}`} className='user-link' style={{color:'0086d8'}}>
                                            <Avatar backgroundColor="orange" px='8px' py='5px'>{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                            <div>
                                                {question.userPosted}
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </section>
                     {
                        question.noOfAnswers !== 0 &&(
                            <section>
                                <h3>{question.noOfAnswers} answers</h3>
                                <DisplayAnswer key={question.id} question={question}/>
                            </section>
                        )
                     }
                     <section className='post-ans-container'>
                        <h3>Your Answers</h3>
                        <form action="">
                            <textarea name="" id="" cols="30" rows="10"></textarea> <br />
                            <input type="submit" className='post-ans-btn' value='Post Your Answer'/>
                        </form>
                        <p>
                            Browse other function tagged
                            {
                                question.QuestionTags.map((tag) => (
                                     <Link to='/Tags' key={tag} className='ans-tags'> {tag} </Link>   
                                )) 
                            } or 
                            <Link to='/AskQuestion' style={{textDecoration:"none", color:"#009dff"}}>ask your own question</Link>
                        </p>
                     </section>
                  </div>  
                ))
            }
        </>
      }
    </div>
  )
}

export default QuestionsDetails
