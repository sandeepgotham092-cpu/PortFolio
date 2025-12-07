import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { Route, Routes, useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()
  const [state,setState] = useState('Hero')
  return (
    <><div className='appcontainer'>
    <div className='sideNav'>
      <a href='#' onClick={()=>navigate('/',setState('Hero'))}>{state === "Hero" ? <div style={{backgroundColor:'lightblue',borderRadius:4}}>About My self</div>:<div className='hoverdiv'>About My self</div>}</a>
      <a href='#'onClick={()=>navigate('/Education',setState('Education'))}>{state === "Education" ? <div style={{backgroundColor:'lightblue',borderRadius:4}}>Education</div>:<div className='hoverdiv'>Education</div>}</a>
      <a href='#'onClick={()=>navigate('/Skills',setState('Skills'))}>{state === "Skills" ? <div style={{backgroundColor:'lightblue',borderRadius:4}}>Skills</div>:<div className='hoverdiv'>Skills</div>}</a>
      <a href='#'onClick={()=>navigate('/Projects',setState('Projects'))}>{state === "Projects" ? <div style={{backgroundColor:'lightblue',borderRadius:4}}>Projects</div>:<div className='hoverdiv'>Projects</div>}</a>
      <a href='#'onClick={()=>navigate('/Contacts',setState('Contacts'))}>{state === "Contacts" ? <div style={{backgroundColor:'lightblue',borderRadius:4}}>Contacts</div>:<div className='hoverdiv'>Contacts</div>}</a>
    </div>
    <Routes>Contacts
      <Route path='/' element={<Hero/>}/>
      <Route path='/Education' element={<Education/>}/>
      <Route path='/Skills' element={<Skills/>}/>
      <Route path='/Projects' element={<Projects/>}/>
      <Route path='/Contacts' element={<Contact/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App
