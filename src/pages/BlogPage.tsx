import { BookMarkIcon } from '../icons';
import { useParams } from 'react-router-dom';
import { cards, sections } from '../mockData';
import { useEffect, useRef, useState } from 'react';
import BlogIntroductionSection from '../sections/BlogIntroductionSection';
import BlogsItemsSection from '../sections/BlogsItemsSection';
import AskAIButton from '../components/buttons/AskAIButton';
import BlogNavigator from '../components/BlogNavigator';

const BlogPage = () => {
  const { id } = useParams();
  const itemData = cards.filter((item) => item.id.toString() === id);
  console.log(itemData[0]);

  const [activeSection, setActiveSection] = useState<string | null>(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className=' flex flex-col w-full h-full mx-auto '>
      <div className='relative bg-[#181b1a] z-20 flex flex-row justify-end px-4 py-2 gap-2 text-gray-200 border-b-[0.1px] border-[#2d2d2d]'>
        <p className='absolute justify-center  w-full items-center z-10 flex'>
          {itemData[0].title}
        </p>
        {id}
        <div className='relative flex gap-2 z-20'>
          <BookMarkIcon className='w-5 h-5' />
          <p>Link</p>
          <p>SHare</p>
        </div>
      </div>
      <div>
        <div className='will-change-auto h-full  flex max-h-[250px] justify-stretch gap-lg md:max-h-[400px] md:min-h-[200px] mt-6 cursor-zoom-in md:mx-24'>
          <img
            src={itemData[0].imageUrl}
            alt={itemData[0].title}
            className='h-auto rounded-lg w-full object-cover md:object-[center_-50px] hover:scale-[0.92] transition-all ease-in-out transform scale-90'
          />
        </div>
      </div>
      <div className='mx-auto md:mx-24 grid grid-cols-12 '>
        <div className='grid grid-cols-12 w-full col-span-12 px-4'>
          <div className='md:px-6 pt-2 col-span-12 md:col-span-8 flex flex-col gap-14 mb-32'>
            {sections.map((section, index) =>
              index === 0 ? (
                <BlogIntroductionSection
                  section={section}
                  index={index}
                  sectionsRef={sectionsRef}
                />
              ) : (
                <BlogsItemsSection
                  section={section}
                  index={index}
                  sectionsRef={sectionsRef}
                />
              )
            )}
          </div>
          <BlogNavigator
            activeSection={activeSection}
            handleScrollToSection={handleScrollToSection}
            sections={sections}
          />
        </div>
        <AskAIButton />
      </div>
    </div>
  );
};

export default BlogPage;
