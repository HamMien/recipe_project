import React, { useState } from 'react'
import TopNav from './components/TopNav'
import Slide from './components/Slide'
import Delivery from './components/Delivery'
import Weeks from './components/Weeks'


const App = () => {
  return (
    <div className='App'>
      <TopNav />
      <Slide />
      <Delivery />
      <Weeks />
    </div>
  )
}

export default App