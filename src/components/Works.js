import React from 'react'
import react from './assets/react.jpg'
import ui from './assets/ui.jpg'
import wd from './assets/wd.jpg'
import wd2 from './assets/wd2.jpg'
import wd3 from './assets/wd3.jpg'
import wd4 from './assets/wd4.jpg'
import on from './assets/on.png'
import book from './assets/book.png'
import './styles/Works.scss'

const Works = () => {
    return (
        <>
        <h1 id="projects">Projects</h1>
        
        <div className='works'>
       
            <div className="work__section">

           
                <div className="cards">
                    <img src={on} alt="" />
                    <button>Online Quiz System</button>
                </div>
                <div className="cards">
                   <img src={wd} alt="" />
                    <button>Final Date Prediction</button>
                </div>

                <div className="cards">
                    <img src={book} alt="" />
                    <button>Online BookStore</button>
                </div>

                

                
            </div>
        </div></>
    )
}

export default Works
