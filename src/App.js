import React from 'react'
import LandingPage from './pages/landingPage/LandingPage'
import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import QuestionPage from './pages/questionPage/QuestionPage';
export default function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/quizpage/questionpage" element={<QuestionPage />} />
      </Routes>
    </Router>
  )
}
