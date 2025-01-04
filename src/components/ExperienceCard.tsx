import { useEffect, useRef, useState } from 'react';
import CarouselBtn from './ui/CarouselBtn';
import { ExperienceType } from '@constants/experienceList';

interface ExperienceCardProps {
  experienceList: ExperienceType;
}

const ExperienceCard = ({ experienceList }: ExperienceCardProps) => {
  const TOTAL_SLIDES = experienceList.length - 1;
  const DESCTOP_TOTAL = Math.ceil(experienceList.length / 2) - 1;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  const innerWidth = window.innerWidth;

  const nextSlide = () => {
    if (innerWidth >= 768) {
      if (currentSlide >= DESCTOP_TOTAL) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    } else if (innerWidth < 768) {
      if (currentSlide >= TOTAL_SLIDES) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    if (slideRef.current !== null) {
      slideRef.current.style.transition = 'all 0.5s ease-in-out';
      slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
    }
  }, [currentSlide]);

  return (
    <>
      <CarouselBtn
        nextSlide={nextSlide}
        prevSlide={prevSlide}
        DESCTOP_TOTAL={DESCTOP_TOTAL}
        TOTAL_SLIDES={TOTAL_SLIDES}
        currentSlide={currentSlide}
        innerWidth={innerWidth}
      />
      <div
        className="ml-[-1%] translate-x-[0%] whitespace-nowrap list-none"
        ref={slideRef}
      >
        {experienceList.map((experience) => (
          <div
            className="visible overflow-hidden inline-block w-[100%] px-[1%] whitespace-nowrap align-top md:w-[50.5%]"
            key={experience.id}
          >
            <div className="relative  w-full h-full whitespace-normal transition-all duration-300">
              <img
                className="mb-[15px] rounded-[20px] object-cover transition-all ease-in	duration-300 hover:rounded-[60%]  border solid border-lightGray"
                src={experience.images}
                alt="experience-images"
              />
            </div>
            <div className="font-[600] text-left whitespace-normal">
              <div className="text-[24px] tracking-[-0.04em]">
                {experience.title}
              </div>
            </div>
            <div className="mb-[10px] whitespace-normal">
              {experience.detail.map((desc, idx) => (
                <p
                  key={idx}
                  className="text-black2 leading-[1.4em] text-sm md:text-lg"
                >
                  {desc}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ExperienceCard;
