import React from 'react'
import threeOne from "../images/threeOne.jpg"
import threeTwo from "../images/threeTwo.jpg"
import threeThree from "../images/threeThree.jpg"

const Inspiration = () => {
  return (
    <>
      <h1 id="gotoabout" className='text-center font-myfont mt-20 md:mt-20 lg:mt-32 font-bold text-3xl lg:text-4xl text-gray-800 px-2'>Inspiration collection</h1>
      <p className='text-center text-gray-700 mt-1 px-2 font-myfont text-sm lg:text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, maxime.</p>


      {/* div for image */}
      <div className='flex flex-col md:flex-row justify-evenly mb-4 lg:mb-8'>
        <img data-aos="fade-right" className='rounded-3xl md:mt-24 lg:mt-32 mx-4 mt-10 md:w-[28vw] shadow-md md:rounded-tr-none md:rounded-bl-none md:rounded-br-none' src={threeOne} alt={threeOne}/>
        <img data-aos="fade-down" className=' rounded-3xl mx-4 mt-10 md:w-[28vw] shadow-md md:rounded-none ' src={threeTwo} alt={threeTwo}/>
        <img data-aos="fade-left" className=' rounded-3xl md:mt-24 lg:mt-32 mx-4 mt-10 md:w-[28vw] shadow-md md:rounded-tr-none md:rounded-tl-none md:rounded-bl-none ' src={threeThree} alt={threeThree}/>
      </div> 
    </>
  );
} 

export default Inspiration