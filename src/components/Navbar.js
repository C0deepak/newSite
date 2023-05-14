import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const[screenWidth, setScreenWidth] = useState(window.innerWidth)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }
  
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener('resize', changeWidth)
  }, [])
  return (
    <>
      <div className="navbar">
        <nav>
          <Link to='/' className="navLogo">
            <img src="img/ieteLogo.png" alt="navLogo" />
            <span>IETE</span>
          </Link>
          <div className="navLinkWrap">
            {(toggleMenu || screenWidth > 800) && (
              <div className="navLink">
              <ul>
                <li><Link to='/'>Blog</Link></li>
                <li><Link>Glimpse</Link>
                    <ul>
                      <li><Link to='/'><i class="fa-solid fa-calendar-days"></i>Events</Link></li>
                      <li><Link to='/'><i class="fa-solid fa-shapes"></i>Segments</Link></li>
                      <li><Link to='/'><i class="fa-solid fa-photo-film"></i>Gallery</Link></li>
                    </ul>
                </li>
                <li><Link>Associate</Link>
                    <ul>
                      <li><Link to='/'><i class="fa-solid fa-users"></i>Members</Link></li>
                      <li><Link to='/'><i class="fa-solid fa-user-graduate"></i>Alumni</Link></li>
                    </ul>
                </li>
                <li><Link to='/'>Acheivement</Link></li>
              </ul>
              </div>
            )}
            <div className='navBtn'>Join Us</div>
            <div className="navIcon" onClick={toggleNav}><i className='fa-solid fa-bars'></i></div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
