import React from 'react';

const Getstart = () => {
  return (
    <div className='bg-[#f7fdff] relative w-full lg:w-[1440px] h-[662px] flex flex-col lg:flex-row items-center lg:items-start gap-10 mt-24 opacity-1 mx-auto px-4'>
      <div className='flex flex-col items-start text-left'>
        
      <h1 className="text-black text-2xl lg:text-[36px] lg:leading-[54px] lg:font-medium text-left font-poppins inline-flex">
        Your <span className='text-purpleshade italic '>Hobby,</span> Your <span className='text-blueshade italic'>Community...</span>
      </h1>

        <button className="bg-purpleshade text-white w-[115px] h-[30px] mt-4 font-semibold rounded-md">Get Started</button>
        <h2 className="text-black text-lg mt-4">Explore our community!</h2>
        {/* Added heading below button */}
        <div className="mt-10 lg:mt-0 lg:ml-4">
        <img
          src="/groupimg.svg"
          alt="Illustration"
          className="w-full max-w-[360px] lg:max-w-none h-auto mt-48"
        />
        {/* Added SVG image below the button and heading */}
      </div>
     
      </div>
      
    </div>
  );
};

export default Getstart;
