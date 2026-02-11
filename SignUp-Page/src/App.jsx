import React from 'react'
import LeftSection from './Components/LeftSection/LeftSection'
import RightSection from './Components/RightSection/RightSection'

const App = () => {
  const cardContent= [
    {
      tag:'Sign up your account',
      color:'white'

    },
    {
      tag:'Set up your workspace',
      color:'green'
    },
    {
      tag:'Set up your profile',
      color:'blue'
    }
  ]
  
  
   return (
    <div className='flex h-full'>
      <LeftSection cardContent={cardContent} />
      <RightSection/>
    </div>
  )
}

export default App