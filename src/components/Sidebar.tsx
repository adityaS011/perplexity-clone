import { useNavigate } from 'react-router-dom';
import {
  CollapseIcon,
  DiscordIcon,
  GlobeIcon,
  LibraryIcon,
  LogoIcon,
  SearchIcon,
  SignInIcon,
  TwitterIcon,
} from '../icons';
import DownloadButton from './buttons/DownloadButton';
import LearnMoreButton from './buttons/LearnMoreButton';
import NewThreadButton from './buttons/NewThreadButton';
import SignUpButton from './buttons/SignUpButton';

const Sidebar = ({
  setCollapseSidebar,
}: {
  setCollapseSidebar: (val: boolean) => void;
}) => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col gap-6 h-full font-sans '>
      <div className='flex flex-row justify-between gap-3 px-2 mt-4 '>
        <LogoIcon className='w-28 md:w-[200px] h-full pl-1' />
        <div
          className='hover:bg-[#2d3030] text-gray-400 hover:text-white rounded-full p-3 '
          onClick={() => setCollapseSidebar(true)}
        >
          <CollapseIcon className='  w-3 h-auto ' />
        </div>
      </div>
      <div className='px-4 w-full'>
        <NewThreadButton />
      </div>
      <div
        className='flex flex-col justify-center font-medium space-y-1 pl-1 pr-4'
        onClick={() => navigate('/')}
      >
        <div className='text-gray-400 hover:text-gray-200  hover:bg-[#353636] py-2 px-4 rounded cursor-pointer  flex flex-row gap-2 items-center'>
          <SearchIcon className='h-4 w-4' />
          <p>Home</p>
        </div>
        <div
          className='text-gray-400 hover:text-gray-200 hover:bg-[#353636] py-2 px-4 rounded cursor-pointer  flex flex-row gap-1 items-center'
          onClick={() => navigate('/discover/:id')}
        >
          <GlobeIcon className='h-5 w-5' />
          <p>Discover</p>
        </div>
        <div className='text-gray-400 hover:text-gray-200 hover:bg-[#353636] py-2 px-4 rounded cursor-pointer  flex flex-row gap-2 items-center'>
          <LibraryIcon className='h-4 w-4' />
          <p>Library</p>
        </div>
        <div className='text-gray-400 hover:text-gray-200 hover:bg-[#353636] py-2 px-4 rounded cursor-pointer  flex flex-row gap-2 items-center'>
          <SignInIcon className='h-4 w-4' />
          <p>Sign In</p>
        </div>
      </div>
      <div className='px-4 w-full'>
        <SignUpButton />
      </div>
      <div className='mt-auto w-full'>
        <div className='flex flex-col px-4 py-1 gap-1 text-white'>
          <div>
            <p className='hover:text-teal-400 font-medium text-sm w-fit cursor-pointer'>
              Try Pro
            </p>
            <p className='text-sm font-sans text-gray-500'>
              Upgrade for image upload, smarter AI, and more Pro Search.
            </p>
          </div>
          <LearnMoreButton />
        </div>
        <div className='w-full h-[1px] bg-[#303131] my-2'></div>
        <div className='flex flex-row mb-6 justify-between px-2 text-gray-400  items-center'>
          <DownloadButton />
          <div className='flex  items-center'>
            <div className='p-2 rounded-full hover:bg-[#353636] hover:text-white'>
              <TwitterIcon className='w-[14px] h-[14px]' />
            </div>
            <div className='p-2 rounded-full hover:bg-[#353636] hover:text-white'>
              <DiscordIcon className='w-4 h-4' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
