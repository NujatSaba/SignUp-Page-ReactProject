import React from 'react'
import LeftSection from './Components/LeftSection/LeftSection'
import RightSection from './Components/RightSection/RightSection'

const App = () => {
  return (
    <div className='flex h-screen'>
      <LeftSection/>
      <RightSection/>
    </div>
  )
}

export default App