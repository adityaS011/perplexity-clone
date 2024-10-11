import { SectionType } from '../mockData';

const BlogsItemsSection = ({
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
      id={`section-${section.id}`}
      key={index}
      ref={(el) => (sectionsRef.current[index] = el)}
      className='h-fit   text- px-2 text-[#f7f6f6f6] gap-3 flex flex-col'
    >
      <h2 className='text-3xl break-words whitespace-pre-wrap mb-2'>
        {section.title}
      </h2>
      <p className='font-sans break-words text-[#eae7e8] tracking-wide  proportional-nums leading-1.5 flex'>
        {section.content}
      </p>
      <div className='flex flex-row py-2 items-center gap-4'>
        <div className='flex flex-row rounded-full border border-gray-600 w-fit p-2 gap-2'>
          <div className='flex flex-row gap-[-10px]'>
            <img
              alt='User avatar'
              className='h-4 w-4 flex items-center rounded-full object-cover z-10'
              src='https://imagedelivery.net/MPdwyYSWT8IY7lxgN3x3Uw/9e305ddd-7dcf-486c-0a78-a4ba48609700/thumbnail'
            />
            <img
              alt='User avatar'
              className='h-4 w-4 flex items-center rounded-full object-cover z-20 -ml-1.5'
              src='https://imagedelivery.net/MPdwyYSWT8IY7lxgN3x3Uw/9e305ddd-7dcf-486c-0a78-a4ba48609700/thumbnail'
            />
            <img
              alt='User avatar'
              className='h-4 w-4 flex items-center rounded-full object-cover z-30 -ml-1.5'
              src='https://imagedelivery.net/MPdwyYSWT8IY7lxgN3x3Uw/9e305ddd-7dcf-486c-0a78-a4ba48609700/thumbnail'
            />
          </div>
          <p className='text-xs font-medium text-gray-500 '>5 sources</p>
        </div>
        <div>Link</div>
        <div>Copy</div>
      </div>
    </div>
  );
};

export default BlogsItemsSection;
