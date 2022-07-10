import React from 'react'
import './styles/Study.scss'
import man2 from './assets/man2.jpg'

const Study = () => {
    return (
        <div className='study'>


            <div className="study__container">

                <div className="study__content">
                    <div id='study'>
                    <h1>Acedemics</h1></div>
                    
                </div>
                <div className='edu'>
                <div>
                    <h1>Bachelor of Technology in CSE</h1><br>
                    </br>
                    <p>07/2019 - Present</p>
                        
                        <p><b>Lovely Professional University, Phagwara</b></p>
                        
                        <p><b>CGPA: </b>8.78</p>
                    </div>
                    <div>
                    <h1>Intermediate in MPC</h1><br></br>
                    <p>06/2017 - 03/2019</p>
                        <p><b>GRC Junior College, Ramachandrapuram</b></p>
                        
                        <p><b>CGPA: </b>9.88</p>
                        
                    </div>
                    <div>
                    <h1>X (AP BSE)</h1><br></br>
                    <p>06/2016 - 04/2017</p>
                        <p><b>Smt.Gmd.Modern High School, Ramachandrapuram</b></p>
                        
                        <p><b>CGPA: </b>10</p>
                    </div>
                    </div>


            </div>


        </div>
    )
}

export default Study
