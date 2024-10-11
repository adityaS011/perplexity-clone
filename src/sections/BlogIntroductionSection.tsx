import { LogoIcon } from '../icons';
import { SectionType } from '../mockData';

const BlogIntroductionSection = ({
  section,
  index,
  sectionsRef,
}: {
  section: SectionType;
  index: number;
  sectionsRef: any;
}) => {
  return (
    <div
      key={index}
      id={`section-${section.id}`}
      ref={(el) => (sectionsRef.current[index] = el)}
      className='text-[#f7f6f6f6] font-sans flex flex-col gap-2 '
    >
      <div className='p-2  text-4xl leading-[1.1] whitespace-pre-wrap break-words md:text-[2.8rem]  '>
        {section.title}
      </div>
      <div className='flex flex-row justify-between items-center px-2'>
        <div className='flex flex-row items-center gap-2 '>
          <img
            alt='User avatar'
            className='h-7 w-7 flex items-center rounded-full object-cover'
            src='https://imagedelivery.net/MPdwyYSWT8IY7lxgN3x3Uw/9e305ddd-7dcf-486c-0a78-a4ba48609700/thumbnail'
          />
          <div className='font-medium text-gray-400 flex flex-col h-fit gap-0'>
            <p className='text-base'>Lorem ipsum dolor sit.</p>
            <p className='text-xs'>1 min read</p>
          </div>
        </div>
        <div className='flex flex-row gap-4 text-sm'>
          <p>{section.date}</p>
          <p>{section.stats?.views}</p>
          <p>{section.stats?.comments}</p>
        </div>
      </div>
      <div className='relative p-2 font-medium font-mono '>
        <div className='first-letter:text-[2.75em] first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:leading-none font-sans text-base'>
          <div className='prose inline leading-normal break-words min-w-0 [word-break:break-word]'>
            <span>{section.content}</span>
          </div>
        </div>
      </div>
      <div className='grid grid-flow-col overflow-x-auto gap-4 text-xs'>
        <div className='flex flex-col p-2 justify-between bg-[#232121e9] gap-2 rounded-lg hover:bg-[#343131e9]'>
          <div className=' text-clip h-fit line-clamp-3'>
            <p className='font-medium'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias,
              veritatis non. Aspernatur.
            </p>
          </div>
          <div className='flex flex-row gap-1'>
            <LogoIcon className='w-4 h-4' />
            <p>abcnews.co.in • 1</p>
          </div>
        </div>
        <div className='flex flex-col p-2 justify-between bg-[#232121e9] gap-2 rounded-lg hover:bg-[#343131e9]'>
          <div className=' text-clip h-fit line-clamp-3'>
            <p className='font-medium'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias,
              veritatis non. Aspernatur.
            </p>
          </div>
          <div className='flex flex-row gap-1'>
            <LogoIcon className='w-4 h-4' />
            <p>abcnews.co.in • 1</p>
          </div>
        </div>
        <div className='flex flex-col p-2 justify-between bg-[#232121e9] gap-2 rounded-lg hover:bg-[#343131e9]'>
          <div className=' text-clip h-fit line-clamp-3'>
            <p className='font-medium'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias,
              veritatis non. Aspernatur.
            </p>
          </div>
          <div className='flex flex-row gap-1'>
            <LogoIcon className='w-4 h-4' />
            <p>abcnews.co.in • 1</p>
          </div>
        </div>
        <div className='flex flex-col p-2 justify-between bg-[#232121e9] gap-2 rounded-lg hover:bg-[#343131e9]'>
          <div className=' text-clip h-fit line-clamp-3'>
            <p className='font-medium'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias,
              veritatis non. Aspernatur.
            </p>
          </div>
          <div className='flex flex-row gap-1'>
            <LogoIcon className='w-4 h-4' />
            <p>abcnews.co.in • 1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogIntroductionSection;
