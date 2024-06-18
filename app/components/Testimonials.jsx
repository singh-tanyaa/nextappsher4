import React from 'react';

const Testimonials = () => {
  return (
    <div className='container mt-20 mx-auto px-4 md:px-20 bg-[#f7f5f9] md:mt-14 pt-14'>
      
      <div className='flex items-center justify-center md:justify-start md:mb-4'>
        <img
          src="/Testimonials.svg"
          alt="Illustration"
          className="w-10 h-10 mr-2"
        />
        <h2 className="text-xl font-bold">Testimonials</h2>
      </div>

      <p className="text-center md:text-left mb-4 px-4 md:px-0">
        In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like-minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
      </p>

      <div className="flex flex-col md:flex-row items-center md:justify-start mb-4">
      
        <img
          src="/audiotrack.svg"
          alt="Audio Track"
          className="w-full md:w-[700px] h-[100px] mb-4 md:mb-0 md:mr-4"
        />
        {/* Profile section */}
        <div className="flex items-center justify-center flex-col md:flex-row md:ml-56">
          <div className="relative flex-shrink-0 mb-4 md:mb-0 md:mr-4">
            <img src="kathak.png" alt="Profile" className="w-20 h-20 rounded-full" />
            <img src="mic.svg" alt="Microphone" className="absolute bottom-0 left-0 w-6 h-6" />
          </div>
          <div className="text-center md:text-left">
            <p className="font-semibold text-purpleshade">Shubha Nagarajan</p>
            <p className="text-blueshade">Classical Dancer</p>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Testimonials;
