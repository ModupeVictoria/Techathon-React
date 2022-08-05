import React from 'react'


function AboutUs() {
  return (
    <div className='bg-[#d5e5f5] pt-12 pb-12 w-full '>
        <div className="container flex flex-col items-center mx-auto md:flex-row md:justify-between px-16">
            <div>
            <img
                src="/images/img2.jpg"
                alt="banner"
                className="w-[100%] mt-8 md:w-[70%] rounded-lg items-center mx-auto"
      />
            </div>
            <div className='mt-12'>
                <h1 className='text-4xl font-bold text-[#001d46]'>The Best <br/> Vetenarians in <br/> all Branches</h1>
                <p className='mt-6 text-gray-600 font-semibold '>All veternarians are expersts in their fields and <br/>
                    graduated from the best universities, all of our <br/>
                    veternarians are always ready to work and deliver the <br/>
                    best service.
                </p>
                <button  className="text-white bg-[#3781e2] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-5">Contact Us</button>
                <p></p>
            </div>
        </div>
    </div>
  )
}

export default AboutUs