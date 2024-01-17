import React from 'react'
import { socials } from "../../constants"
import "./Footer.css"

const Footer = () => {
  return (
    <>
      <div id='Contact' className='app__footer-container'>
        <div className="app__footer-links">
            {
              socials.map((social) => (
                <a href={social.link} target='blank' key={social.name} className="app__social-links">
                    <i className={`${social.icon}`} style={{color: `${social.color}`}}></i>
                    <p>{social.name}</p>
                </a>
              ))
            }
        </div>
      </div>
    </>
  )
}

export default Footer