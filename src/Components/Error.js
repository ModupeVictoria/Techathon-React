import React from 'react'
import { Link } from "react-router-dom";

function Error() {
    


  return (
    <div className=' bg-[#d5e5f5] '>
        <div className='container flex flex-col-reverse md:flex-row md:justify-between items-center mx-auto pb-5'>
            <div className='mt-8'>
             <div className='mt-5'>
             <h1 className='text-5xl font-bold mb-8 text-[#001d46]'>404 <br/> Ooops! <br/> Page Not Found</h1>
                <p className='text-gray-600 mb-8'>This page doesn't exist or was removed! <br/> We suggest you go back to home.</p>
                <botton className=''>
                <Link to="/" className="text-white bg-[#3781e2] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">Back to Home</Link>
                </botton>
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

export default Error