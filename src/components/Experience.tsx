import ExperienceCard from './ExperienceCard';
import IndexPageContent from './IndexPageContent';

const Experience = () => {
  return (
    <IndexPageContent>
      <div className="overflow-visible flex flex-col text-black2">
        <div className="flex flex-wrap flex-col justify-between  px-[17px] pb-[17px] tracking-[-.02em]">
          <div className="font-[600]">
            <h3 className="text-[24px] md:text-[32px]">
              Work Experience
              <br />
              <em>
                {'as a '}
                <span className="pb-[1px] px-[0.2em] border solid border-black rounded-[30em] transition-all ease-in-out duration-[200ms] hover:bg-[#472A18] hover:text-[#fff]">
                  front-end developer
                </span>
                {' 👀.'}
              </em>
            </h3>
          </div>
          <div className="mt-[10px] text-[16px] leading-[1.4em] text-black">
            <span>
              "미디어 커머스 쇼핑 앱 포크 쇼핑을 운영하는 포크홀딩스에서
              프론트엔드 개발자로 재직했어요"
            </span>
          </div>
        </div>
      </div>
      <ExperienceCard />
    </IndexPageContent>
  );
};

export default Experience;