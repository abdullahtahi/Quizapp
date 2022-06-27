import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import axios from "axios"
import "./QuestionAppear.css"
import { useNavigate } from 'react-router-dom';

export default function QuestionAppear({ quizQuestion }) {
    const navigate = useNavigate();

    console.log("the question appear", quizQuestion)
    const [submitans, setsubmitans] = useState()
    const [error, seterror] = useState()
    const [marks,setmarks]=useState(0)
    const submitmarks=()=>{
          
        if(submitans === quizQuestion.currentans) {
    
            setmarks(marks+5)
    
        } else {
            setmarks(0)
        }
        }
    useEffect(() => {
        submitmarks()
    
}, [submitans])

   
// submitmarks()
const date=new Date();

const submitQuestion = async () => {    
        try {

            if (!submitans || submitans === "") {
                seterror("please this field is required")
            }
            else{
                const { data } = await axios.post("http://localhost:3001/quizapp/postresult", {
                    quizans: submitans,
                    marks: marks,
                    
                })
                navigate("/")
            }
            
           
           
           
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div>
            <Paper className='paper_conta' elevation={3}>
                <TextField id="outlined-basic"
                    label="Answer the question"
                    variant="outlined"
                    onChange={(e) => setsubmitans(e.target.value)}
                />
                <h2 style={{
                    color: "red"
                }}>{error}</h2>
                <p style={{
                    color: "grey"
                }}>Note:write a word in a same way as it written down</p>
                <h1>1.{quizQuestion.question}</h1>
                <p>a.{quizQuestion.option1}</p>
                <p>b.{quizQuestion.option2}</p>
                <p>c.{quizQuestion.option3}</p>
                <div className='buttons'>
                    <div className='pre_btn'>
                        <Link to="/" className='mainScr_btn'>MainScreen</Link>
                    </div>
                    <div className='submit_btn'>
                        <Link to=""className="submit_btn1"onClick={submitQuestion}>Submit </Link>
                    </div>
                </div>

            </Paper>


        </div>
    )
            }
