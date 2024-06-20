import React from "react";

const Cards = () => {
  return (
    <div>
      <div className="container mx-auto px-4 lg:px-16 mt-20">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl">
            {/* Card 1 */}
            <div className="bg-[#f7f5f9] rounded-sm shadow-md p-6 opacity-100 transition-opacity duration-300">
              <div className="flex items-center mb-2">
                <img
                  src="/people.svg"
                  alt="Illustration"
                  className="w-8 h-8 mr-2"
                />
                <h2 className="font-poppins text-xl font-bold mb-2">People</h2>
              </div>
              <p className="font-poppins text-base text-gray-700 mb-4">
                Find a teacher, coach, or expert for your hobby interest in your
                locality. Find a partner, teammate, accompanist or collaborator.
              </p>
              <button className="text-[#8064a2] border-[#8064a2] border-2 font-bold py-2 px-4 rounded bg-[#f7f5f9] mt-12">
                Connect
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-[#f7f5f9] rounded-md shadow-md p-6 opacity-100 transition-opacity duration-300">
              <div className="flex items-center mb-2">
                <img
                  src="/place.svg"
                  alt="Illustration"
                  className="w-8 h-8 mr-2"
                />
                <h2 className="font-poppins text-xl font-bold mb-2">Place</h2>
              </div>
              <p className="font-poppins text-base text-gray-700 mb-4">
                Find a class, school, playground, auditorium, studio, shop or an
                event venue. Book a slot at venues that allow booking through
                hobbycue.
              </p>
              <button className="text-[#8064a2] border-[#8064a2] border-2 font-bold py-2 px-4 rounded bg-[#f7f5f9] mt-12">
                Meet Up
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-[#f7f5f9] rounded-lg shadow-md p-6 opacity-100 transition-opacity duration-300">
              <div className="flex items-center mb-2">
                <img
                  src="/product.svg"
                  alt="Illustration"
                  className="w-8 h-8 mr-2"
                />
                <h2 className="font-poppins text-xl font-bold mb-2">Product</h2>
              </div>
              <p className="font-poppins text-base text-gray-700 mb-4">
                Find equipment or supplies required for your hobby. Buy, rent or
                borrow from shops, online stores or from community members.
              </p>
              <button className="text-[#8064a2] border-[#8064a2] border-2 font-bold py-2 px-4 rounded bg-[#f7f5f9] mt-12">
                Get it
              </button>
            </div>

            {/* Card 4 */}
            <div className="bg-[#f7f5f9] rounded-lg shadow-md p-6 opacity-100 transition-opacity duration-300">
              <div className="flex items-center mb-2">
                <img
                  src="/program.svg"
                  alt="Illustration"
                  className="w-8 h-8 mr-2"
                />
                <h2 className="font-poppins text-xl font-bold mb-2">Program</h2>
              </div>
              <p className="font-poppins text-base text-gray-700 mb-4">
                Find events, meetups and workshops related to your hobby.
                Register or buy tickets online.
              </p>
              <button className="text-[#8064a2] border-[#8064a2] border-2 font-bold py-2 px-4 rounded bg-[#f7f5f9] mt-12">
                Attend
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
