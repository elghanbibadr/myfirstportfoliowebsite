import React from 'react'
import Nav from './component/Header/Nav'
import Hero from './component/Header/Hero'
import Main from './component/main/main'
const App = () => {
  return (
   <div className='container'>
    <Nav/>
    <Hero />
    <Main/>
   </div>
  )
}

export default App