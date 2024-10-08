import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <div className='bg-[#202323] w-full min-h-screen flex flex-row overflow-hidden'>
      <div className='w-[220px] '>
        <Sidebar />
      </div>
      <main className='bg-[#181b1a] rounded-lg p-4 w-full mt-2 mr-4'>
        <HomePage />
      </main>
    </div>
  );
};

export default App;
