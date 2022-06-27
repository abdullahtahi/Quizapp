import React from 'react'
import "./LandingPage.css"
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Paper'
import {Link} from "react-router-dom";


export default function LandingPage() {

  
  return (


    <div>


      <Paper className="header" elevation={3}>
        <h2 style={{
          color: "#FF6347"
        }}>Quiz App</h2></Paper>
      <div className="pageContent">

        <div className='Displaymesssage'>
          <h3>
            WELCOME TO THE QUIZ APP
          </h3>
        </div>
        <div className='pressmetxt'><h6>PRESS ME TO</h6></div>
        <div style={{
          marginTop:"20px"
        }}>

          <Link className='start_btn' to="/quizpage/questionpage"> START</Link>
        </div>
      </div>
    </div>
  )
}
