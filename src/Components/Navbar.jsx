import React, { useState } from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {VscClose} from "react-icons/vsc"
import {Link} from 'react-scroll'

const Navbar = () => {

    const [nav,setNav] = useState(false);
    const handleNav = () =>{
        setNav(!nav);
    }

  return (
    <>
        {/* main box */}
        <div id="gotonav" className='flex py-2 md:py-3 justify-between items-center'>
            <h1 className='text-[#054C73] font-myfont ml-4 lg:ml-[4rem] font-bold text-2xl md:text-3xl'>Furniture</h1>

           {/* div for li  */}
           <div className='hidden md:flex items-center py-4'>
            <ul className='flex lg:ml-24 py-3'>
                <Link to="gotoabout" smooth={true} duration={1500}><li className='px-1 sm:px-4 lg:px-8 sm:text-lg hover:cursor-pointer font-myfont text-sm'>About</li></Link>

                <Link to="gotocommunity" smooth={true} duration={1500}><li className='px-1 sm:px-4 lg:px-8 sm:text-lg hover:cursor-pointer font-myfont text-sm'>Community</li></Link>

                <Link to="gotoservices" smooth={true} duration={1500}><li className='px-1 sm:px-4 lg:px-8 sm:text-lg hover:cursor-pointer text-sm font-myfont'>Services</li></Link>

                <Link to='gotogallery' smooth={true} duration={1500}><li className='px-1 sm:px-4 lg:px-8 sm:text-lg hover:cursor-pointer font-myfont text-sm'>Gallery</li></Link>

                <Link to="gotocontact" smooth={true} duration={1000}><li className='px-1 sm:px-4 lg:px-8 sm:text-lg hover:cursor-pointer font-myfont text-sm'>Contact</li></Link>
            </ul>
            </div>
            {/* div for li */}
 

            {/* for hamburger */}
            <div onClick={handleNav}>
            {nav? <VscClose className='text-[#054C73] md:hidden text-xl mr-2'/>:<HiOutlineMenuAlt4 className='text-[#054C73] md:hidden text-xl mr-2'/>}
            </div>
            {/* for hamburger */}


            {/* div for mobile */}
            <div className={nav? " ease-in-out border border-b-black border-l-gray-900 duration-[1.5s] opacity-[0.9] md:hidden mt-[18rem] text-black bg-blue-100 w-full absolute":"absolute left-[-100%]"}>

           <center>
           <ul>
                <Link to="gotoabout" smooth={true} duration={1500}><li className='mt-2 text-xl font-myfont py-2 '>About</li></Link>
                <Link to="gotocommunity" smooth={true} duration={1500}><li className='mt-2 text-xl font-myfont py-2 '>Community</li></Link>
                <Link to="gotoservices" smooth={true} duration={1500}><li className='mt-2 text-xl font-myfont py-2 '>Services</li></Link>
                <Link to="gotogallery" smooth={true} duration={1500}><li className='mt-2 text-xl font-myfont py-2 '>Gallery</li></Link>
                <Link to="gotocontact" smooth={true} duration={1500}><li className='mt-2 text-xl font-myfont py-2 '>Contact</li></Link>
            </ul>
           </center>

            </div>
            {/* div for mobile */}


        </div>
    {/* main box */}
    </>
  );
}

export default Navbar