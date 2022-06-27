import React,{useState} from 'react'
import "./QuestionPage.css"
import {data} from "../../Component/QuestionData/Data"
import Paper from '@mui/material/Paper';

import QuestionAppear from '../../Component/QuestionAppear/QuestionAppear';

export default function QuestionPage() {
  

    
return (
        <div>
            <div className='top-message'>
                <Paper elevation={3} > Answer the task to Win </Paper>
            </div>
            <div className='questionAppear'>
           {data.map((e,k)=><QuestionAppear key={k}quizQuestion={e}/> )
          } 
                       </div>
        </div>
    )
}
