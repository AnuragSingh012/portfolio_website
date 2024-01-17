import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <nav className='app__navbar'>
      <ul className='app__navbar-links'>
        {
          ["Home", "About", "Skills", "Project", "Contact"].map((item) => (
            <li className='app__flex p-text' key={`link-${item}`}>
              <div>
                <a href={`#${item}`}>{item}</a>
              </div>
            </li>
          ))
        }
      </ul>

      <div className="app__navbar-menu">
        <i className="fa-solid fa-bars" onClick={() => setToggle(true)}></i>
        {
          toggle && (
            <div className='app__navbar-menu-items'>
              <i className="fa-solid fa-xmark" onClick={() => setToggle(false)}></i>
              <ul>
                {
                  ["Home", "About", "Skills", "Project", "Contact"].map((item) => (
                    <li key={item}>
                      <div>
                        <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                      </div>
                    </li>
                  ))
                }
              </ul>
            </div>
          )
        }
      </div>

    </nav>
  )
}

export default Navbar