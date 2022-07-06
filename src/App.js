import React from 'react'
import Beauty from './Components/Beauty';
import Contact from './Components/Contact';
import Header from './Components/Header';
import HeaderTwo from './Components/HeaderTwo';
import Inspiration from './Components/Inspiration';
import Mailing from './Components/Mailing';
import Navbar from './Components/Navbar';
import Range from './Components/Range';
import Rights from './Components/Rights';
import Works from './Components/Works';

import {IoIosArrowDropupCircle} from "react-icons/io"
import { Link } from 'react-scroll';

// import Link from "react-scroll"

const App = () => {
  return (
    <>
    <Link to="gotonav" smooth={true} duration={1500}><IoIosArrowDropupCircle  className='text-3xl ml-3 md:ml-6 cursor-pointer fixed mt-16 md:mt-24 opacity-60 lg:mt-32 shadow-black shadow-md rounded-full'/></Link>

      <Navbar/>
      <Header/>
      <HeaderTwo/>
      <Inspiration/>
      <Beauty/>
      <Range/>
      <Works/>
      <Mailing/>
      <Contact/>
      <Rights/>
    </>
  );
}

export default App
