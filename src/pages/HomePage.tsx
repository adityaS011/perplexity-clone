import Header from '../components/Header';
import MainContent from './MainContent';

const HomePage = () => {
  return (
    <div className='flex flex-col'>
      <Header />

      <div className='w-full h-[1px] bg-[#303131] '></div>
      <MainContent />
    </div>
  );
};

export default HomePage;
