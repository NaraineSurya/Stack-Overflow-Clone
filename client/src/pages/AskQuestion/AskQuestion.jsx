import React ,{useState} from 'react'
import './AskQuestion.css'
import { useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

const AskQuestion = () => {

    const [ questionTitle, setQuestionTitle ] = useState('')
    const [ questionBody, setQuestionBody ] = useState('')
    const [ questionTags, setQuestionTags] = useState('')

    const dispatch = useDispatch()
    const User = useSelector((state) => (state.currentUserReducer))
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({ questionTitle, questionBody, questionTags})
    }

    const handleEnter = (e) => {
        if(e.key === 'Enter'){
            setQuestionBody(questionBody + "\n")
        }
    }

  return ( 
    <div className='ask-question'>
        <div className="ask-ques-container">
            <h1 className='ask-ques'>Ask a public Question</h1>
            <h1>{questionBody}</h1>
            <form onSubmit={handleSubmit}>
                <div className="ask-form-container">
                    <label htmlFor='ask-ques-title'>
                        <h1 style={{fontSize:"1.5rem"}} className='title'>Title</h1>
                        <p>Be specific and imagine you're asking a question to another person</p>
                        <input type="text" id='ask-ques-title' onChange={(e) => {setQuestionTitle(e.target.value)}}  placeholder="e.g. Is there an R function for finding the index of an element in a vector?" />
                    </label>
                    <label htmlFor='ask-ques-body'>
                        <h1 style={{fontSize:"1.5rem"}}>Body</h1>
                        <p> Include all the information someone would need to answer your question</p>
                        <textarea name="" id="ask-ques-body" onChange={(e) => {setQuestionBody(e.target.value)}} cols="30" rows="5" onKeyDown={handleEnter}></textarea>
                    </label>
                    <label htmlFor='ask-ques-tags'>
                        <h1 style={{fontSize:"1.5rem"}}>Tags</h1>
                        <p>Add up to 5 tags to describe what your question is about</p>
                        <input type="text" id='ask-ques-title' onChange={(e) => {setQuestionTags(e.target.value.split(""))}}  placeholder="e.g. (xml typescript wordpress)"/>
                    </label>
                </div>
                <input type='submit' value='Review your question' className='review-btn' />
            </form>
        </div>
    </div>
  )
}

export default AskQuestion

