import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Sidenav from './components/templates/Sidenav'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movie from './components/Movie'
import Tvshows from './components/Tvshows'
import People from './components/People'

function App() {
  return (
    <div className='w-screen h-screen bg-[#1F1E24] flex'>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/trending' element={<Trending/>} />
        <Route path='/popular' element={<Popular/>} />
        <Route path='/movie' element={<Movie/>} />
        <Route path='/tv' element={<Tvshows/>} />
        <Route path='/people' element={<People/>} />
      </Routes>
    </div>
  )
}

export default App