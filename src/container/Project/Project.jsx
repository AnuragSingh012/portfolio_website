import React from 'react'
import './Project.css'
import { Projects } from "../../constants";

const Project = () => {
  return (
    <>
    <h2 id='Project' className='head-text'>Projects</h2>
    <div className='app__project-container'>
      <div className='app__project-list'>
        {
          Projects.map((project) => (
            <div key={project.name} className="app__project-item">
              <div className='app__flex app__project-img'>
                <a href={project.link} target='_blank'><img src={project.imgURL} alt={project.name} /></a>
              </div>
              <div className='app__project-content'>
                <h4 className='bold-text'>{project.name}</h4>
                <p>{project.skill}</p>
              </div>
              
            </div>
          ))
        }
      </div>
    </div>
    </>
  )
}

export default Project