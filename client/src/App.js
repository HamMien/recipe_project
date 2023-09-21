import React from 'react'
import TopNav from './components/TopNav'
import Slide from './components/Slide'
import Delivery from './components/Delivery'
import Weeks from './components/Weeks'
import Recipe from './components/Recipe'

const App = () => {
  return (
    <div className="App">
       <TopNav />
       <Slide />
       <Delivery />
       <Weeks />
       <Recipe />
    </div>
  )
}

export default App