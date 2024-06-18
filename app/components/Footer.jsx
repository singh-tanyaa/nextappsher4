 
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaGoogle, FaYoutube, FaTelegram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-200 w-full py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-3">Hobby Queue</h3>
          <ul>
            <li>About Us</li>
            <li>Our Services</li>
            <li>Work With Us</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">How Do I</h3>
          <ul>
            <li>Sign Up</li>
            <li>Add a Listing</li>
            <li>Claim Listing</li>
            <li>Post a Query</li>
            <li>Add a Blog Post</li>
            <li>Other Queries</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul>
            <li>Listings</li>
            <li>Blog Posts</li>
            <li>Shop</li>
            <li>Flash</li>
            <li>Store</li>
            <li>Community</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Social Media</h3>
          <div className="flex space-x-4">
            <FaFacebook className="text-xl" />
            <FaTwitter className="text-xl" />
            <FaInstagram className="text-xl" />
            <FaPinterest className="text-xl" />
            <FaGoogle className="text-xl" />
            <FaYoutube className="text-xl" />
            <FaTelegram className="text-xl" />
            <FaEnvelope className="text-xl" />
          </div>

          <div className="flex flex-col mt-40 relative w-full max-w-lg mx-auto">
  <h1 className="absolute top-[-1.5rem] left-3 px-1 font-semibold">Invite Friends</h1>
  <div className="flex items-center mt-6">
    <input 
      type="email" 
      placeholder=" Email ID" 
      className="flex-1 p-2 border border-gray-400 rounded-l-md" 
    />
    <button className="p-2 bg-purpleshade text-white rounded-r-md">Invite</button>
  </div>
</div>



        </div>
       
      </div>
      <div className="bg-gray-300 text-center py-4 mt-10">
        <p>&copy; See Purple Queues Private Limited</p>
      </div>
    </footer>
  );
};

export default Footer;