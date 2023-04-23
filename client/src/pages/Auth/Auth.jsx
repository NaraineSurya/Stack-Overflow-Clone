import React, {useState} from 'react'
import './Auth.css'
import icon from '../../assets/stackoverflow-logo.svg'
import AboutAuth from './AboutAuth'
import { signup, login } from '../../actions/auth'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Auth = () => {

  const [isSignup, setIsSignup] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSwitch = () => {
    setIsSignup(!isSignup)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!email || !password ){
      alert("Enter a email and password")
    }
    if(isSignup){
    if(!name){
      alert("Enter an name to continue")
    } 
    dispatch(signup({ name,email,password }, navigate))
  } else {
    dispatch(login({ email,password}, navigate))
  }
    console.log({ name,email,password})
  }

  return (
    <section className='auth-section'>
      { isSignup && <AboutAuth />}
      <div className="auth-container-2" >
        <form style={{marginTop: "75px"}} onSubmit={handleSubmit} >
        { !isSignup && <img src={icon} alt ='stack overflow' className='login-logo'></img>}
          {

            isSignup && (
              <label htmlFor="name">
                <h5>Display name</h5>
                <input type="text" id="name" name="name" onChange={(e) => {setName(e.target.value)}}/>
              </label>
            )

          }
          <label htmlFor='email'>
              <h5>Email</h5>
              <input type="email" name="email" id="email" onChange={(e) => {setEmail(e.target.value)}} />
          </label>
          <label htmlFor='password'>
            <div style={{display:"flex" , justifyContent:"space-between"}}>
              <h5>Password</h5>
             {!isSignup && <p style={{color: "#007ac6", fontSize:"13px"}}>forgot password?</p> }
            </div>                 
              <input type="password" name="password" id="password" onChange={(e) => {setPassword(e.target.value)}} />
              { isSignup && <p style={{color: "#666787", fontSize: "13px"}} >Passwords must contain at least eight<br /> characters, including at least 1<br /> letter and 1 number</p> }
                    
          </label>
           {
            isSignup && (
              <label htmlFor='check'>
                  <input type="checkbox" id='check' style={{width:"20px"}}  />
                  <p style={{color: "#666787", fontSize:"13px"}}>Opt-in to receive occasional <br />product updates,user research invitations,<br />company announcements, and digests.</p>
              </label>
            )
           }
          <button type="submit" className='auth-btn'>{ isSignup ? 'Sign up' : 'Login '}</button>
          {
            isSignup && (
              <p style={{color: "#666787", fontSize:"13px"}}>
                By clicking "Sign up", you agree to our 
                <span style={{color: "#007ac6"}}> terms of<br /> service</span>,
                <span style={{color: "#007ac6"}}> privacy policy</span> and 
                <span style={{color: "#007ac6"}}>cookies policy</span>
              </p>
            )
          }
        </form>
        <p style={{fontSize:"15px"}}>
          {isSignup ? 'Already have an account? ' : "Don't have an account? "}
          <button type='button' className='handle-switchp-btn' onClick={handleSwitch}>{ isSignup ? "Login" : "Sign up"}</button>
        </p>
      
      </div>

    </section>
  )
}

export default Auth
