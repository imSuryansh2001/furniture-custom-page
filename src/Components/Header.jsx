import React from 'react'
import bg from "../images/bg.jpg"

const Header = () => {
  return (
    <>
      <div className='bg-cover bg-center pt-[2rem] lg:pt-[5rem] h-[60vh] sm:h-[60vh] lg:h-[80vh] w-full' style={{ backgroundImage: `url(${bg})`}}>
      {/* flex div */}
       
        {/* text-main div */}
        <div className='bg-[#DFE9F4] rounded-xl h-[50vh] lg:h-[60vh] w-[78vw] sm:w-[50vw] md:w-[40vw] ml-[4.2rem] sm:ml-[19rem] md:ml-[28rem] lg:ml-[38rem] xl:ml-[47rem]'>
            <p className='font-myfont text-sm lg:text-xl pt-6 lg:pt-10 pl-4 tracking-[0.2rem]'>NEW ARRIVAL</p>
            <h1 className='text-3xl lg:text-4xl font-bold mt-2 lg:mt-8 pl-4 text-[#054C73]'>Discover Our New Collection</h1>
            <p className='font-myfont text-sm lg:text-xl pl-4 pt-2 lg:pt-6 tracking-[0.2rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem necessitatibus reprehenderit, vel nemo corporis esse.</p>
            <a href="#gotorange"><button className='bg-[#054C73] font-semibold lg:mt-[3rem] tracking-[0.1rem] ml-4 mt-4 text-white text-sm px-4 lg:px-6 py-2 lg:py-3 rounded-xl'>BUY NOW</button></a>
        </div>
        
      </div>
    </>
  );
}

export default Header