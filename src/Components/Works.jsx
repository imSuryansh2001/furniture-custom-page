import React from 'react'
import warehouse from "../images/warehouse.png"
import securley from "../images/securley.png"
import room from "../images/room.png"


const Works = () => {
  return (
    <>
    <hr/>

    <h1 id="gotogallery" className='text-center lg:mt-32 font-myfont mt-32 font-bold text-3xl lg:text-4xl text-gray-800 px-2'>How it works</h1>

    <p className='text-center text-gray-700 mt-1 px-2 mb-1 font-myfont text-sm lg:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>


{/* div for images */}
<div className='flex flex-col md:flex-row justify-center items-center mt-10 mb-3 lg:mb-5'>

    <div className='flex flex-col mt-14 md:mt-0'>
    <img data-aos="zoom-in" className='mt-8 w-[90vw] md:w-[30vw] md:mx-3'src={room}  alt={room}/>
    <h1 className='font-semibold text-center font-myfont tracking-[0.2rem] text-3xl pt-2 text-gray-800'>Style Your Room</h1>
    <p className='font-myfont text-center mt-2 md:text-lg text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>

    <div className='flex flex-col mt-14 md:mt-0'>
    <img data-aos="zoom-in-up" className='mt-8 w-[90vw] md:w-[30vw] md:mx-3'src={warehouse}  alt={warehouse}/>
    <h1 className='font-semibold text-center font-myfont tracking-[0.2rem] text-3xl pt-2 text-gray-800'>ships / Warehouse</h1>
    <p className='font-myfont text-center text-sm mt-2 md:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>


    <div className='flex flex-col mt-14 md:mt-0'>
    <img data-aos="zoom-in-down" className='mt-8 w-[90vw] md:w-[30vw] md:mx-3'src={securley}  alt={securley}/>
    <h1 className='font-semibold text-center font-myfont tracking-[0.2rem] text-3xl pt-2 text-gray-800'>Purchase Securely</h1>
    <p className='font-myfont text-center text-sm mt-2 md:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
</div>

    </>
  );
}

export default Works
