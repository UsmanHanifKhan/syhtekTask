import logo from '../assets/images/Logo.png';
import PropTypes from 'prop-types';
const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="bg-[#fef7f2] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="logo" className='w-40' />
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#" className="text-[#333] font-medium hover:text-[#e3263b] relative">
            Categories
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#e3263b]"></span>
          </a>
          <a href="#" className="text-[#666] font-medium hover:text-[#e3263b]">
            Brands
          </a>
          <a href="#" className="text-[#666] font-medium hover:text-[#e3263b]">
            Contact Us
          </a>
          <div>
            <button className="bg-[#e3263b] text-white py-2 px-4 rounded-full hover:bg-[#d61e32] transition duration-200">
              Sell With Us
            </button>
          </div>
        </div>
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="text-[#333] focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
    toggleSidebar: PropTypes.func.isRequired,
  };

export default Navbar;
