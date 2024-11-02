import React from 'react'
import NavBar from './components/NavBar'
import SplitScreen from './components/SplitScreen'
import LeftSideComp from './components/LeftSideComp'
import RightSideComp from './components/RightSideComp'

const App = () => {
  return (
    <>
      <NavBar/>
      <div className='mt-10'>
        <SplitScreen leftWidth={1} rightWidth={3}>
          <LeftSideComp/>
          <RightSideComp/>
        </SplitScreen>
      </div>
    </>
  )
}

export default App