import { GlobeIcon } from '../icons';

const Header = () => {
  return (
    <div className='flex flex-col p-4 justify-center h-16 md:h-[70] '>
      <div className='px-8 w-full mx-20 flex flex-row gap-2 items-center text-slate-200 tracking-wide'>
        <GlobeIcon className='w-8  mt-1' />
        <p className='text-2xl md:text-3xl items-center flex font-sans '>
          Discover
        </p>
      </div>
    </div>
  );
};

export default Header;
