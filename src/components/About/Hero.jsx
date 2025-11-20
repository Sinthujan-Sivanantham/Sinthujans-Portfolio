import React from 'react'
import ProfileImage from '../Pictcure/ProfileImage'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className=' h-svh  mb-1 flex flex-col items-center justify-center '>
      <h1 className='text-4xl mb-4 '>Welcome to my Portfolio</h1>
      <h1 className='text-4xl mb-20 flex justify-items-center'>Hey there, <br /> I am Sinthujan Sivanantham</h1>
       <ProfileImage />
    <div className=' text-center flex flex-col items-center justify-center '>
      <h3 className='text-xl mb-4' >I am a passionate developer who loves 
      <br /> building web applications and  solving complex problems.</h3> 
     <Link to="/contact"> <button className=' cosmic-button '>
        Get in Touch
      </button> </Link> 
    </div>
    </div>
  )
}

export default Home;