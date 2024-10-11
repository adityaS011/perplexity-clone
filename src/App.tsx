import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import { useState } from 'react';

const App = () => {
  const [collapseSidebar, setCollapseSidebar] = useState(false);
  return (
    <div className='bg-[#202323] w-full h-screen flex overflow-hidden'>
      {/* Sidebar with fixed height */}
      <div
        className={`w-[220px] h-screen hidden md:${
          collapseSidebar ? 'hidden' : 'block'
        }`}
      >
        <Sidebar setCollapseSidebar={setCollapseSidebar} />
      </div>

      <div className='bg-[#1b191a] rounded-lg w-full h-screen mr-4 overflow-y-auto no-scrollbar'>
        <Routes>
          {/* Route for the home page */}
          <Route path='/' element={<HomePage />} />
          {/* Route for the discover page with dynamic id */}
          <Route path='/blog/:id' element={<BlogPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
