import { useState } from 'react';
import './App.css';
import bgImage from './assets/images/Group 101848.png';
import Navbar from './Components/Navbar';
import mobileScreen from './assets/images/Mobile Screen 1.png';
import mobileScreen2 from './assets/images/Mobile Screen 2.png';
import group from './assets/images/Group 10249.png';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(${bgImage})` }}>
        {/* NavBar */}
        <Navbar toggleSidebar={toggleSidebar} />
        {isSidebarOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={toggleSidebar}></div>
        )}
        {/* sideBar */}
        <div className={`fixed top-0 left-0 w-64 bg-white h-full z-50 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}>
          <ul className="p-4">
            <li className="mb-4"><a href="#">Categories</a></li>
            <li className="mb-4"><a href="#">Brands</a></li>
            <li className="mb-4"><a href="#">Contact Us</a></li>
            <li><a href="#">Sell With Us</a></li>
          </ul>
        </div>
        {/* Hero Section */}
        <div className="flex flex-col justify-center items-center text-center h-[100vh] relative px-4">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#333] leading-tight mb-8">
            Compare prices for over <br /> 
            5 million products sold online
          </h1>
          <div className="flex justify-center items-center bg-white rounded-full shadow-lg w-full sm:w-64 md:w-1/2 lg:w-1/2 p-2 z-40">
            <input
              type="text"
              placeholder="Search for a product, gtin, brand or category"
              className="flex-grow p-4 rounded-l-full text-gray-600 focus:outline-none"
            />
            <button className="bg-[#e3263b] p-4 rounded-full text-white ml-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </div>
          <div className="mt-6">
            <button className="bg-[#e3263b] text-white font-bold py-3 px-10 md:px-16 rounded-full hover:bg-[#d61e32] transition duration-200">
              Search
            </button>
          </div>
          <p className="text-gray-500 mt-4 max-w-xl text-center mb-20">
            Price comparison helps you save 100s of pounds on online shopping. Start by searching for the product you want to buy and see what’s the cheapest price available online.
          </p>
          <img src={mobileScreen} alt="mobileScreen1" className='absolute w-[35%] md:w-[25%] lg:w-[23%] left-4 md:left-16 lg:left-20 top-16' />
          <img src={mobileScreen2} alt="mobileScreen2" className='absolute w-[28%] md:w-[20%] lg:w-[18%] right-0 top-16' />
          <div className="bg-white py-10 absolute left-0 bottom-0 w-[90%] md:w-[85%] lg:w-[80%] rounded-tr-[80px] overflow-hidden mx-auto">
            <img src={group} alt="group logos" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
