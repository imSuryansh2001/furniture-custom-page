import React from 'react'
import {AiFillInstagram} from "react-icons/ai"
import {TiSocialTwitter} from "react-icons/ti"
import {IoLogoFacebook} from "react-icons/io"



const Contact = () => {
  return (
    <>
        {/* contact main box */}
        <div className='flex bg-[#F2F5FF] flex-col md:flex-row justify-center md:justify-evenly'>

            <div>
                <h1 className='text-3xl font-semibold text-[#054C73] text-center font-myfont  mt-14'>Furniture</h1>
                <p className='font-myfont text-gray-800 px-20  mt-2'>“Every great design begins with an even better story.”</p>

                {/* for icons */}
                <div className='flex justify-center mt-3 mb-2'>
                <AiFillInstagram className='text-2xl lg:text-3xl text-[#054C73] mx-3'/>
                <TiSocialTwitter className='text-2xl lg:text-3xl text-[#054C73] mx-3'/>
                <IoLogoFacebook className='text-2xl lg:text-3xl text-[#054C73] mx-3'/>
                </div>

            </div>
            
                
            <div className='flex flex-col justify-center items-center' >
            <h1 className='font-myfont font-semibold text-2xl text-gray-800  mt-12'>Links</h1>
                <p className=' text-lg mt-2 text-gray-800 tracking-[0.2rem]'>Privacy Policy</p>
                <p className=' text-lg mt-2 text-gray-800 tracking-[0.2rem]'>Team</p>
                <p className=' text-lg mt-2 text-gray-800 tracking-[0.2rem]'>Pricing</p>
                <p className=' text-lg mt-2 text-gray-800 tracking-[0.2rem]'>History</p>
            </div>

            <div className='flex flex-col justify-center items-center pb-6'>
            <h1 className='font-myfont font-semibold text-2xl text-gray-800  mt-16'>Information</h1>
                <p className=' text-lg mt-2 text-gray-800 tracking-[0.2rem]'>Designs</p>
                <p className=' text-lg mt-2 text-gray-800 tracking-[0.2rem]'>Custom</p>
                <p className=' text-lg mt-2 text-gray-800 tracking-[0.2rem]'>Flexibility</p>
                <p className=' text-lg mt-2 text-gray-800 tracking-[0.2rem]'>Support</p>
            </div>

        </div>
    </>
  );
}

export default Contact