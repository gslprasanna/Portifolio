import React from 'react'
import './styles/Section.scss'
import man2 from './assets/man2.jpg'
import sri from './assets/sri.gif'
const Skills = () => {
    return (
        <div className='section'>


            <div className="section__container">


                <div className="section__img">
                    <img src={sri} alt=""  />
                </div>


                <div className="section__content">
                    <div id='about'>
                    <h1>About Me</h1>
                    <p>This is Sri Lakshmi Prasanna</p>
                    <p>I am a Full Stack Developer</p>
                    <p>Currently Pursuing B.tech in Lovely Professional University</p>
                    <p> I have good knowledge in Web Development</p>
                    <p>Developed many Websites</p>
                    </div>
                </div>



            </div>


        </div>
    )
}

export default Skills
