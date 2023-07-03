import IndexPageContent from './IndexPageContent';
import ProjectCard from './ProjectCard';

const Project = () => {
  return (
    <IndexPageContent>
      <div className="overflow-visible flex flex-col text-black2">
        <div className="font-[600]">
          <h3 className="text-[24px] md:text-[32px]">
            Project
            <br />
            <em>
              {'made by '}
              <a
                className="pb-[1px] px-[0.2em] cursor-pointer border solid border-black rounded-[30em] transition-all ease-in-out duration-[200ms] hover:bg-black hover:text-[#fff]"
                href="https://github.com/feelslikemmmm"
                target="_blank"
                rel="noopener noreferrer"
              >
                @feelslikemmmm
              </a>
            </em>
          </h3>
        </div>
        <div className="mt-[10px] text-[16px] leading-[1.4em] text-black">
          <span>"저의 개인 작업물을 소개할게요"</span>
        </div>
      </div>
      <ProjectCard />
    </IndexPageContent>
  );
};

export default Project;
