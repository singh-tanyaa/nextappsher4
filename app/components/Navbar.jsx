 "use client"
 import React, { useState } from 'react';
 import { Bars3Icon, MagnifyingGlassIcon, BellIcon, BookmarkIcon, ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline';
 import Image from 'next/image';
 import Link from 'next/link';
 
 const Navbar = () => {
   const [sidebarOpen, setSidebarOpen] = useState(false);
 
   const toggleSidebar = () => {
     setSidebarOpen(!sidebarOpen);
   };
 
   return (
     <nav className="bg-white p-4 shadow">
       <div className="container mx-auto flex justify-between items-center">
         {/* Logo for desktop and mobile view */}
         <div className="flex items-center">
           <Image
             src="/logo.png"
             alt="Logo"
             width={293.26}
             height={60}
             className="hidden lg:block "
             style={{ opacity: 1 }}
           />
           <Image
             src="/logo.png"
             alt="Logo"
             width={156.4}
             height={32}
             className="block lg:hidden"
             style={{ opacity: 1}}
           />
         </div>
         
         {/* Search bar and Explore/Hobby dropdowns for medium and larger screens */}
         <div className="hidden md:flex items-center space-x-4">
           <div className="relative flex items-center text-gray-600">
             <input
               type="search"
               placeholder="Search"
               className="bg-white  px-5 pr-10 rounded-full text-sm focus:outline-none w-[300px] h-[40px] border border-gray-300"
             />
             <MagnifyingGlassIcon className="w-5 h-5 absolute right-0 top-0 mt-3 mr-4 text-gray-600" />
           </div>
           {/* Explore Dropdown */}
           <div className="relative group">
             <button className="text-gray-700 text-sm font-medium">Explore</button>
             <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 w-56">
               <Link href="/places" legacyBehavior
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Places - Venues</Link>
               
               <Link href="/people" legacyBehavior
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100">People - Community</Link>
               
               <Link href="/programs" legacyBehavior
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Programs - Events</Link>
               
               <Link href="/products" legacyBehavior
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Products - Store</Link>
               
               <Link href="/blogs" legacyBehavior
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Blogs</Link>
               
             </div>
           </div>
           {/* Hobby Dropdown */}
           <div className="relative group">
             <button className="text-gray-700 text-sm font-medium">Hobby</button>
             <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 w-[220px] h-[210px]">
               <Link href="/hobby-option1" legacyBehavior
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 1</Link>
               
               <Link href="/hobby-option2" legacyBehavior
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 2</Link>
               
               <Link href="/hobby-option3" legacyBehavior
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 3</Link>
               
               <Link href="/hobby-option4" legacyBehavior
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 4</Link>
               
               <Link href="/hobby-option5" legacyBehavior
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 5</Link>
               
             </div>
           </div>
         </div>
 
         {/* Icons and Sign In button */}
         <div className="flex items-center space-x-4">
           <BellIcon className="w-6 h-6 text-[#8064a2]" />
           <BookmarkIcon className="w-6 h-6 text-gray-700 hidden md:block" />
           <ShoppingCartIcon className="w-6 h-6 text-gray-700  hidden md:block" />
           <button className="text-[#8064a2] border-[#8064a2] border-2 font-bold py-2 px-4 rounded bg-white  hidden md:block">
             Sign In
           </button>
           <Bars3Icon className="w-6 h-6 text-gray-700 md:hidden" onClick={toggleSidebar} />
         </div>
       </div>
       {/* Sidebar for mobile view */}
       {sidebarOpen && (
         <div className="md:hidden">
           <div className="fixed inset-0 bg-gray-800 bg-opacity-75" onClick={toggleSidebar}></div>
           <div className="fixed inset-y-0 left-0 w-64 bg-white text-gray-700 p-4">
             <button className="text-gray-700 text-2xl" onClick={toggleSidebar}>
               <XMarkIcon className="w-6 h-6" />
             </button>
             <nav className="mt-4">
               <Link href="/explore" legacyBehavior
                  className="block py-2 text-sm font-medium">Explore</Link>
               
               <Link href="/hobby" legacyBehavior
                className="block py-2 text-sm font-medium">Hobby</Link>
               
               <div className="relative flex items-center text-gray-600 mt-4">
                 <input
                   type="search"
                   placeholder="Search"
                   className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none w-full border border-gray-300"
                 />
                 <MagnifyingGlassIcon className="w-5 h-5 absolute right-0 top-0 mt-3 mr-4 text-gray-600" />
               </div>
             </nav>
           </div>
         </div>
       )}
     </nav>
   );
 };
 
 export default Navbar;
 








// import React, { useState } from 'react';
// import { Bars3Icon, MagnifyingGlassIcon, BellIcon, BookmarkIcon, ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline';
// import Image from 'next/image';
// import Link from 'next/link';

// const Navbar = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <nav className="bg-gray-800 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="flex items-center">
//           <Image
//             src="/logo.png"
//             alt="Logo"
//             width={156.4}
//             height={32}
//             // className="lg:hidden"
//             style={{ opacity: 0 }}
//           />
//           <Image
//             src="/logo.png"
//             alt="Logo"
//             width={293.26}
//             height={60}
//             // className="hidden lg:block"
//             style={{ opacity: 0 }}
//           />
//         </div>
//         <div className="hidden md:flex items-center space-x-4">
//           <div className="relative flex items-center text-gray-600">
//             <input
//               type="search"
//               placeholder="Search"
//               className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none w-[300px] h-[40px] border border-gray-300"
//             />
//             <MagnifyingGlassIcon className="w-5 h-5 absolute right-0 top-0 mt-3 mr-4 text-gray-600" />
//           </div>
//           <Link href="/explore"
//             className="text-white text-sm font-medium">Explore</Link>
         
//           <Link href="/hobby"
//             className="text-white text-sm font-medium">Hobby</Link>
          
//         </div>
//         <div className="flex items-center space-x-4">
//           <BellIcon className="w-6 h-6 text-white" />
//           <BookmarkIcon className="w-6 h-6 text-white" />
//           <ShoppingCartIcon className="w-6 h-6 text-white" />
//           <button className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded">
//             Sign In
//           </button>
//           <Bars3Icon className="w-6 h-6 text-white md:hidden" onClick={toggleSidebar} />
//         </div>
//       </div>
//       {sidebarOpen && (
//         <div className="md:hidden">
//           <div className="fixed inset-0 bg-gray-800 bg-opacity-75" onClick={toggleSidebar}></div>
//           <div className="fixed inset-y-0 left-0 w-64 bg-gray-800 text-white p-4">
//             <button className="text-white text-2xl" onClick={toggleSidebar}>
//               <XMarkIcon className="w-6 h-6" />
//             </button>
//             <nav className="mt-4">
//               <Link href="/explore"
//                 className="block py-2 text-sm font-medium">Explore</Link>
              
//               <Link href="/hobby"
//                 className="block py-2 text-sm font-medium">Hobby</Link>
             
//               <div className="relative flex items-center text-gray-600 mt-4">
//                 <input
//                   type="search"
//                   placeholder="Search"
//                   className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none w-full border border-gray-300"
//                 />
//                 <MagnifyingGlassIcon className="w-5 h-5 absolute right-0 top-0 mt-3 mr-4 text-gray-600" />
//               </div>
//             </nav>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
