import React from 'react'
import Nav from './component/Header/Nav'
import Hero from './component/Header/Hero'
import Main from './component/main/main'
import Footer from './component/footer/footer'
const App = () => {
  return (
   <div className='container'>
    <Nav/>
    <Hero />
    <Main/>
    {/* <Footer/> */}
   </div>
  )
}

export default App