import React from 'react';
import { FaGoogle, FaFacebook, FaEye } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="container mx-auto py-24 px-4 lg:px-16">
      {/* Grid container to handle layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Content */}
        <div className="bg-[#f7f5f9] p-8 rounded-lg mb-8 md:h-[550px]">
          <h2 className="font-poppins text-4xl italic font-bold mb-8">
            Explore your <span className='text-blueshade'>hobby</span> or <span className='text-purpleshade'>passion</span>
          </h2>
          <p className="font-poppins text-lg text-gray-700 leading-relaxed mb-8">
            Sign-in to interact with a community of fellow hobbyists and an ecosystem of
            experts, teachers, suppliers, classes, workshops, and places to practice, participate
            or perform. Your hobby may be about visual or performing arts, sports, games,
            gardening, model making, cooking, indoor or outdoor activities…
          </p>
          <img
            src="/img.svg"
            alt="Illustration"
            className="w-full h-auto mb-8"
          />
        </div>

        {/* Right Content */}
        <div className="bg-[#f7f5f9] p-8 rounded-lg">
          <section className='mb-8'>
            {/* Sign In and Join In buttons */}
            <div className="flex justify-center md:justify-start mb-4">
              <h2 className="text-2xl font-bold mr-4 cursor-pointer text-gray-400 border-gray-400 hover:text-purpleshade hover:border-purpleshade border-b-2">Sign In</h2>
              <h2 className="text-2xl font-bold cursor-pointer text-gray-400 hover:text-purpleshade hover:border-purpleshade border-b-2">Join In</h2>
            </div>
          </section>

          {/* Continue with Google button */}
          <button className="bg-[#f7f5f9] text-base font-bold border-purpleshade border-2 rounded-lg py-2 px-4 mb-4 w-full text-center flex items-center justify-center">
            <FaGoogle className="inline-block mr-2 text-red-500" />
            Continue with Google
          </button>

          {/* Continue with Facebook button */}
          <button className="bg-[#f7f5f9] text-base font-bold border-purpleshade border-2 rounded-lg py-2 px-4 mb-4 w-full text-center flex items-center justify-center">
            <FaFacebook className="inline-block mr-2 text-blue-600" />
            Continue with Facebook
          </button>

          {/* Connect with section */}
          <div className="flex items-center mb-4">
            <div className="border-t border-gray-400 flex-1"></div>
            <p className="mx-4 text-gray-600 font-medium">or connect with</p>
            <div className="border-t border-gray-400 flex-1"></div>
          </div>

          {/* Password input and related elements */}
          <div className="relative mb-4">
            <input type="password" placeholder="Password" className="border border-gray-300 rounded-lg w-full px-3 py-2 focus:outline-none pr-10" />
            <FaEye className="absolute right-3 top-3 text-gray-400 cursor-pointer" />
          </div>

          {/* Remember me checkbox and Forgot password */}
          <div className="flex items-center mb-4">
            <input type="checkbox" id="remember-me" className="mr-2" />
            <label htmlFor="remember-me" className="text-gray-600 text-sm">Remember me</label>
            <a href="#" className="ml-auto text-gray-600 text-sm flex items-center">
              Forgot password
              <FaEye className="ml-1 text-gray-400" />
            </a>
          </div>

          {/* Agree and Continue button (removed from desktop view) */}
          {/* <button className="bg-[#8064A2] text-white rounded-lg py-2 px-4 w-full mb-4">Agree and Continue</button> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
