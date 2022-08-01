import React from 'react'


function Cta() {
  return (
    <div className='bg-[#eaf4fe] pt-12 pb-12 w-full '>
        <div className="container  bg-[#d5e5f5] py-8 px-8 items-center mx-auto rounded-lg">
            <h1 className='text-center text-2xl text-[#001d46]'>Subscribe to our News Letter</h1>
            
<div className="mb-6 mt-6 w-[70%] items-center mx-auto">
<form>   
    <div className="relative">
        
        <input type="text"  className="block p-4 pl-10 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter Your Email" required/>
        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-[#3781e2] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">Submit</button>
    </div>
</form>
</div>
        </div>
    </div>
  )
}

export default Cta