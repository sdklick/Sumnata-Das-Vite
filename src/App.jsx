import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'

const App = () => {
  return (
   <Routes>
     <Route path='/' element={<Home/>}>
     <Route path='about' element={<About/>}></Route>
     <Route path='contact' element={<Contact/>}></Route>
     </Route>
   </Routes>
  )
}

export default App