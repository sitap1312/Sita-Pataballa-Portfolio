import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div>
      <section id="projectsId" className="mywork">
        <div className="sec-title">
          My Work
        </div>

        <div className="projects">
          <div className='project-link'>
            <a href="https://sitap1312.github.io/covidya/ ">
                <img className='project-img' src="./assets/Covidya.png" alt="covidya" />
                <div className='project-overlay'>
                  <div className='project-name'>
                    COVIDYA
                  </div>
                </div>
            </a>
          </div>

          <div className='project-link'>
            <a href="https://recipe-book-072021-sita.netlify.app">
                <img className='project-img' src="./assets/RecipeBook.png" alt="recipebook" />
                <div className='project-overlay'>
                  <div className='project-name'>
                    RECIPEBOOK
                  </div>
                </div>
            </a>
          </div>
        </div>

        <div className="projects">
        <div className='project-link'>
            <a href="https://playlistify4real.netlify.app/">
                <img className='project-img' src="./assets/Playlistify.png" alt="playlistify" />
                <div className='project-overlay'>
                  <div className='project-name'>
                    PLAYLISTIFY
                  </div>
                </div>
            </a>
          </div>

          <div className='project-link'>
            <a href="https://protur.netlify.app/">
                <img className='project-img' src="./assets/Protur.png" alt="protur" />
                <div className='project-overlay'>
                  <div className='project-name'>
                    PROTUR
                  </div>
                </div>
            </a>
          </div>
        </div>
        
      </section>
    </div>
  )
}

export default Projects
