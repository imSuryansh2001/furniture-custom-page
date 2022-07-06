import React from 'react'

const Mailing = () => {
  return (
    <>
        <div className='bg-[#F2F5FF] lg:mt-32'>
            <h1 id="gotocontact" className='text-3xl font-myfont text-center mt-14 text-gray-800 font-semibold pt-8 lg:pt-20'>Join Our Mailing List</h1>
            <p className='text-center lg:text-xl px-16 md:px-32 font-myfont mx-2 text-gray-800 mt-2 mb-2 lg:mb-6'>Sign up to receive inspiration, product updates, and special offers from our team.</p>

            {/* div for input */}
            <div className='flex justify-center items-center mx-3'>
                <input className='outline-none lg:placeholder:text-xl tracking-[0.2rem] border md:w-[40%] lg:w-[30%] mt-[1rem] mb-4 py-[0.4rem] placeholder:text-center lg:text-xl text-center border-[#011C42] w-[70vw]' type="text" placeholder='example@gmail.com'/>
                <button className='bg-[#011C42] px-4 py-[0.5rem] font-myfont text-md text-white tracking-[0.2rem] lg:py-[0.6rem]'>Submit</button>
            </div>

        </div>
    </>
  );
}

export default Mailing