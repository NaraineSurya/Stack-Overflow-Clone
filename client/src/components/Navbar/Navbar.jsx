import React , {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useSelector , useDispatch } from 'react-redux'
import logo from '../../assets/stackoverflow-logo.svg'
import search from '../../assets/search-icon.svg'
import Avatar from '../../components/Avatar/Avatar'
import './Navbar.css'
import { setCurrentUser } from '../../actions/currentUser'


const Navbar = () => {
  const dispatch = useDispatch()
  var User = useSelector((state) => (state.currentUserReducer))

  useEffect(() => {
    dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile'))))
  },[dispatch ])

  return (
   <nav className='main-nav'>
    <div className="navbar">
      <Link to='/' className='nav-item nav-logo'>
        <img src={logo} alt="logo" height="30px"/>
      </Link>
      <Link to='/' className='nav-item nav-btn'>About</Link>
      <Link to='/' className='nav-item nav-btn'>Products</Link>
      <Link to='/' className='nav-item nav-btn'>For Teams</Link>
      <form>
        <input type="text" placeholder='Search...' />
       <img src={search} alt="Search" width="18px" className='search-icon' />
      </form>

      { User === null ?
      <Link to ='/Auth' className='nav-item nav-links'>Log in</Link>:
      <>
      <Avatar backgroundColor='#009dff' px='10px' py='7px' borderRadius='50%' color='white'><Link to='/User' style={{color:"white",textDecoration:"none"}}>M</Link></Avatar>
      <button className='nav-item nav-links'>Log out</button>
      </>
      
      }

    </div>

   </nav>
  )
}

export default Navbar
