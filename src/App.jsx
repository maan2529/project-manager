import React from 'react'
import './App.css'
import Dashboard from './Template/Dashboard'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import UserInfo from './Template/UserInfo'

import NotFound from './Template/NotFound'
import Routing from './utils/Routing'

function App() {
  const { search, pathname } = useLocation();
  const location = decodeURIComponent(search.split("=")[1])
  return (
    <>
      {location !== 'undefined' || pathname !== '/' ? <Link className='bg-blue-100 absolute top-1 left-15 z-2 mt-1 font-semibold px-2 py-1 rounded-full mb-2' to={"/"}>Home</Link> : null}
      <Routing />
    </>
  )
}

export default App
//primary #1F1E24
//secondary #6551CD