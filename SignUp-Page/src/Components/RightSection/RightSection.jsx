import React from 'react'
import SignUp from './SignUp'
import Heading from './Heading'
import AutoLogIn from './AutoLogIn'

const RightSection = () => {
  return (
    <div className='h-screen w-1/2  bg-black text-white'>
        <Heading/>
        <AutoLogIn/>
        <SignUp/>
    </div>
  )
}

export default RightSection