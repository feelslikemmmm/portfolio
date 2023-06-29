import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

interface CarouselBtnProps {
  nextSlide: () => void;
  prevSlide: () => void;
  DESCTOP_TOTAL: number;
  TOTAL_SLIDES: number;
  currentSlide: number;
  innerWidth: number;
}

const CarouselBtn = ({
  nextSlide,
  prevSlide,
  DESCTOP_TOTAL,
  TOTAL_SLIDES,
  currentSlide,
  innerWidth,
}: CarouselBtnProps) => {
  return (
    <div className="overflow-hidden">
      <div className="block float-left w-[calc(100%-50px)] mb-[15px] pr-[10px]">
        <span className="hidden">arrows</span>
      </div>
      <div className="float-right w-[50px] flex justify-end">
        <button
          className="mr-[10px] mb-[15px]"
          onClick={prevSlide}
          disabled={currentSlide <= 0}
        >
          <span>
            <AiOutlineArrowLeft className="text-[14px] w-[16px] h-[16px]" />
          </span>
        </button>
        <button
          className="mb-[15px]"
          onClick={nextSlide}
          disabled={
            innerWidth >= 768
              ? currentSlide >= DESCTOP_TOTAL
              : currentSlide >= TOTAL_SLIDES
          }
        >
          <span>
            <AiOutlineArrowRight className="text-[14px] w-[16px] h-[16px]" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default CarouselBtn;
