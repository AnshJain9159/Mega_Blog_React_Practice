/* eslint-disable no-unused-vars */
import React from 'react'
import { useState,useEffect } from 'react'
import './App.css'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import {login,logout} from './store/authSlice'
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
// import {Header,Footer} from './components'
import { Outlet  } from 'react-router-dom'
function App() {
  const [loading,SetLoading]=useState(true)
  const dispatch=useDispatch()

  useEffect(()=>{
    authService.getCurrentUser() //user milgya
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      } else{
        dispatch(logout()) // isse status update hojayega 
      }
    })
    .finally(()=> SetLoading(false)) //loading ka kaam khatam
  },[])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between font-bold text-xl bg-yellow-400'>
      <div className='w-full block content-between'>
        <Header/>
        <main>
          Todo: { <Outlet/> }
        </main>
        <Footer/>
      </div>
    </div>
   ) : null
}

export default App
