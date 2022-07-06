import React from 'react'
import rone from "../images/rone.png"
import rtwo from "../images/rtwo.png"
import rthree from "../images/rthree.png"

const Range = () => {
  return (
    <>

    <h1 id="gotoservices" className='text-center font-myfont mt-12 md:mt-20 lg:mt-32 font-bold text-3xl lg:text-4xl text-gray-800 px-2'>Browse The Range</h1>

    <p className='text-center text-gray-700 mt-1 px-2 mb-1 font-myfont text-sm lg:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>


    {/* div for images */}
    <div className='flex flex-col md:flex-row justify-center items-center mt-10 mb-3 lg:mb-5'>
        <div className='flex flex-col'>

        <img data-aos="flip-left" className='mt-8 w-[90vw] md:w-[30vw] md:mx-3'src={rone}  alt={rone}/>
        <h1 className='font-semibold text-center font-myfont tracking-[0.2rem] text-3xl pt-2 text-gray-800'>Bedroom</h1>

        </div>

        <div className='flex flex-col'>

        <img data-aos="flip-right" className='mt-8 w-[90vw] md:w-[30vw] md:mx-3'src={rtwo}  alt={rtwo}/>
        <h1 className='font-semibold text-center font-myfont tracking-[0.2rem] text-3xl pt-2 text-gray-800'>Living</h1>
        </div>

        <div className='flex flex-col'>
        <img data-aos="flip-up" className='mt-8 w-[90vw] md:w-[30vw] md:mx-3'src={rthree}  alt={rthree}/>
        <h1 className='font-semibold text-center font-myfont tracking-[0.2rem] text-3xl pt-2 text-gray-800'>Dining</h1>
        </div>
    </div>

    </>
  );
}

export default Range