import React from 'react'
import girl from "../images/girl.png"
import eclipse from "../images/eclipse.png"


const Beauty = () => {
  return (
    <>
        {/* main bg color div */}
        <div className='mt-20 sm:mt-24 lg:mt-32 md:flex md:flex-row md:justify-evenly bg-[#F2F5FF]'>
        {/* for text */}
            <div className='flex justify-center flex-col items-center md:w-[40%] md:justify-center md:items-center'>
                <h1 id="gotocommunity" className='font-semibold font-myfont text-3xl lg:text-4xl text-center text-gray-800 mt-10'>Beautify Your Space</h1>
                <p className='text-center mx-3 text-md md:text-lg font-myfont mt-3'>Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                <button data-aos="fade-right" className='bg-[#054C73] font-semibold lg:mt-[3rem] tracking-[0.1rem] mt-4 mb-2 text-white text-sm px-4 lg:px-6 py-2 lg:py-3 rounded-xl'>LEARN MORE</button>
            </div>

            {/* for image */}
            <div data-aos="fade-up-left" className='flex flex-col justify-center items-center mt-14 mb-3 pb-5'>
                <img className='z-[2] h-[50vh] sm:h-[60vh] lg:h-[70vh]' src={girl} alt={girl}/>
                <img className='h-[30vh] lg:h-[50vh] sm:h-[40vh] xl:w-[25vw] absolute ml-14 w-[50vw] md:w-[30vw] z-[1]' src={eclipse}  alt={eclipse}/>
            </div>
        </div>
    </>
  );
}

export default Beauty