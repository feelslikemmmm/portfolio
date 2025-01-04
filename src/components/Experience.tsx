import IndexPageContent from './IndexPageContent';
import ExperienceCard from './ExperienceCard';
import {
  bigcEperienceList,
  forcEperienceList,
} from '@constants/experienceList';

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
                <span className="pb-[1px] px-[0.2em] border solid border-black rounded-[30em] transition-all ease-in-out duration-[200ms]  hover:bg-black hover:text-[#fff]">
                  front-end developer
                </span>
                {' 👀.'}
              </em>
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 pt-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 mt-[10px] text-[18px] leading-[1.4em] text-black font-[500]">
            <p className="font-[600] text-[24px]">BIGC</p>
            <span>
              "글로벌 엔터테크 서비스를 운영하는 빅크에서 프론트엔드 개발자로
              재직했어요"
            </span>
          </div>
          <ExperienceCard experienceList={bigcEperienceList} />
        </div>
        <div className="flex flex-col gap-4 mt-[10px] text-[18px] leading-[1.4em] text-black font-[500]">
          <p className="font-[600] text-[24px]">Forc</p>
          <span>
            "미디어 커머스 쇼핑 앱 포크 쇼핑을 운영하는 포크홀딩스에서
            프론트엔드 개발자로 재직했어요"
          </span>
          <ExperienceCard experienceList={forcEperienceList} />
        </div>
      </div>
    </IndexPageContent>
  );
};

export default Experience;
