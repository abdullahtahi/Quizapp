import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import getresultData from "../dispatch/getresultData"
const  reducer= combineReducers({
    result:getresultData
  })
export const store = configureStore({ 
    reducer
 })
