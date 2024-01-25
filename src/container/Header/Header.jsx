import React from 'react'
import "./Header.css";

const Header = () => {
  return (
    <div id='About' className='app__header'>
      <div className='app__header-content'>
          <h1 className='head-text'>Hi,</h1>
          <h2 className='head-text'>I'm <span>Anurag Singh</span></h2>
          <h3 className='head-text'>Full Stack Developer</h3>
          <p>I'm a passionate full-stack web developer who loves turning ideas into interactive and user-friendly websites. With a knack for both front-end and back-end development. Let's collaborate and bring your digital vision to life!</p>
          <button className='app__header-btn'><a href="https://drive.google.com/file/d/1h-bgLAjcZiFKHTlYHxfWYUzza3m4_1N5/view" target='_blank'>View Resume</a></button>
      </div>
      <div className='app__header-img'>
        <img src="" alt="profile_photo" />
      </div>
    </div>
  )
}

export default Header