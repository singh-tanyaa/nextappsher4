import React from 'react';

const AddYourOwnSection = () => {
  return (
    <div className="container mx-auto px-20 p-4 bg-[#f7fdff] mt-20">
      <div
        className="flex flex-col items-center md:items-start bg-[#ffff] p-6 rounded-lg mx-auto w-full max-w-[90%] md:w-[1160px] gap-0"
      >
        {/* SVG Icon and Heading */}
        <div className="flex items-center mb-4 md:mb-2 justify-center md:justify-start  w-full">
          <img
            src="/Addurown.svg"
            alt="Add Your Own"
            className="w-8 h-8 mr-2"
          />
          <h2 className="text-xl font-bold ">Add your own</h2>
        </div>

        {/* Paragraph Section */}
        <p className="text-center md:text-left mb-4 md:mb-2">
        Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page
          </p>

        {/* Add New Button */}
        <div className="flex justify-center md:justify-start">
          <button className="border-2 border-purpleshade bg-white text-purpleshade font-bold py-2 px-4 rounded-lg w-full md:w-auto">
            Add New
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddYourOwnSection;
