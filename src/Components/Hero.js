import React from 'react'
import { Link } from "react-router-dom";

function Hero() {
    


  return (
    <div className=' bg-[#d5e5f5] '>
        <div className='container flex flex-col-reverse md:flex-row md:justify-between items-center mx-auto px-16'>
            <div className='mt-8'>

              <h3 className="font-semibold text-[#001d46]"><span className='text-xl '>____________ </span>Vetinary Clinic</h3>
     
             <div className='mt-5'>
             <h1 className='text-5xl font-bold mb-8 text-[#001d46]'>Your Amazing Pets <br/> are Important to us</h1>
                <p className='text-gray-600 mb-8'>We are on duty 24 hours a day for the health of <br/> your beautiful pets.</p>
                <div className='mb-5'>
                <botton >
                <Link to="/register" className="text-white bg-[#3781e2] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2">Get Started</Link>
                </botton>
                </div>
                
              </div>            
             
                
            </div>
            <div className='ml-32 mt-10'>
            <img
                src="/images/img1.png"
                alt="banner"
                className="w-[70%] mt-8 md:w-[70%]"
      />
            </div>
        </div>
       
    </div>
  )
}

export default Hero