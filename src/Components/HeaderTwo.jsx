import React from 'react'
import truck from "../images/truck.svg"
import support from "../images/support.svg"
import {BiCheckShield} from "react-icons/bi"

const HeaderTwo = () => {
  return (
    <>
    {/* header two main box */}
        <div className=' h-[70vh] sm:h-[45vh] md:h-[65vh] w-full mb-3 lg:mb-2 lg:flex lg:flex-row'>

            {/* inner main box */}
            <div className='sm:flex sm:justify-around sm:pt-6 md:flex-col bg-[#DFE9F4] py-4'>

            {/* for image */}
                <div className='flex pt-6 flex-col justify-center items-center'>
                <img className='h-[5vh] lg:h-[7vh]' src={truck} alt={truck}/>
                </div>

                {/* for text */}
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='font-semibold pt-2 font-myfont text-2xl lg:text-4xl text-gray-800'>Free Delivery</h1>
                    <p className='text-sm text-center text-gray-700 px-2 pt-2 lg:text-xl lg:pt-3 font-myfont'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, veniam.</p>
                </div>

            </div>



            {/* inner main box */}
            <div className='pt-4 sm:flex sm:justify-around sm:pt-8 md:flex-col bg-[#DFE9F4] py-4'>

             {/* for image */}
             <div className='flex pt-6 flex-col justify-center items-center'>
                <img className='h-[5vh] lg:h-[7.8vh]' src={support} alt={support}/>
                </div>

                {/* for text */}
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='font-semibold pt-2 font-myfont text-2xl lg:text-4xl text-gray-800'>Support 24/7</h1>
                    <p className='text-sm text-center text-gray-700 pt-2 px-2 lg:text-xl lg:pt-3 font-myfont'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, veniam.</p>
                </div>

            </div>



           {/* inner main box */}
            <div className='pt-4 sm:flex sm:justify-around sm:pt-8 md:flex-col bg-[#DFE9F4] py-4'>

            {/* for image */}
                <div className='flex text-4xl md:text-3xl lg:text-6xl pt-6 flex-col justify-center items-center'>
                <BiCheckShield/>
                </div>

                {/* for text */}
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='font-semibold text-center pt-2 font-myfont text-2xl lg:text-4xl text-gray-800'>100% Authentic</h1>
                    <p className='text-sm text-center text-gray-700 px-2 pt-2 lg:text-xl lg:pt-3 font-myfont'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, veniam.</p>
                </div>

            </div>


        </div>
    </>
  );
}

export default HeaderTwo