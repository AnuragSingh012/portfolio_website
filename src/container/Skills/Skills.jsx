import React from 'react'
import './Skills.css'
import { Skill } from "../../constants"

const Skills = () => {
  return (
    <>
    <h2 id="Skills" className='head-text'>Skills</h2>
    <div className='app__skills-container'>
      <div className='app__skills-list'>
          {
            Skill.map((skill) => (
              <div key={skill.name} className='app__skills-item app__flex'>
                <div className='app__flex'>
                  <img src={skill.imgURL} alt={skill.name} />
                </div>
                  <p className='p-text'>{skill.name}</p>
              </div>
            ))
          }
      </div>
    </div>
    
    </>
  )
}

export default Skills