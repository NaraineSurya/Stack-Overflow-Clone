import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/stackoverflow-logo.svg'
import search from '../../assets/search-icon.svg'

const Navbar = () => {
  return (
   <nav>
    <div className="navbar">
      <Link to='/' className='nav-item nav-btn'>
        <img src={logo} alt="logo" />
      </Link>
      <Link to='/' className='nav-item nav-btn'>About</Link>
      <Link to='/' className='nav-item nav-btn'>Products</Link>
      <Link to='/' className='nav-item nav-btn'>For Teams</Link>
      <form>
        <input type="text" placeholder='Search...' />
       <img src={search} alt="Search" width="18px" />
      </form>

    </div>

   </nav>
  )
}

export default Navbar
