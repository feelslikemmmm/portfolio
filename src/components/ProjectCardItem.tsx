import BorderText from './ui/BorderText';
import Link from './ui/Link';
import { GoDotFill } from 'react-icons/go';
interface ProjectCardItemProps {
  project: {
    id: number;
    title: string;
    description: string;
    skills: string[];
    deploy: string;
    role: string;
    webSite: string;
    github: string;
    detail: {
      title: string;
      description: string;
      img: string;
    };
    assignment: string[];
  };
}

const ProjectCardItem = ({ project }: ProjectCardItemProps) => {
  return (
    <>
      <div className="mt-[20px] md:mt-[40px] flex flex-wrap items-center justify-between">
        <h1 className="font-playfair align-left mb-[20px] text-[8vh] md:text-[10vh] tracking-[-0.04em] leading-[80%] text-black2">
          {project.title}
        </h1>
        <div className="font-[500] mb-[10px]">
          <div className="flex items-center text-sm md:text-lg">
            <Link text=" Website↗" url={project.webSite} />
            <p className="px-[5px]">and</p>
            <Link text=" Github↗" url={project.github} />
          </div>
        </div>
      </div>
      <div className="flex justify-beetwen w-[20%]">
        <div className="flex flex-col  justify-start leading-[1.8em] mb-[40px]">
          <div className="text-[15px] leading-[1.8em]">
            <p className="text-black2">✹Skills</p>
          </div>
          <div className="flex flex-wrap">
            {project.skills.map((skill, idx) => (
              <span className="inline" key={idx}>
                <BorderText text={skill} />
                &nbsp;&nbsp;
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full py-[17px] pr-[17px]">
          <h3 className="mb-[32px] whitespace-pre-wrap	text-[28px] text-black2 font-[500] leading-[1.1em] tracking-[-0.02em]">
            {project.detail.title}
          </h3>
          <p className="mb-[20px] whitespace-pre-wrap	text-justify text[18px] text-black2">
            {project.detail.description}
          </p>
          <p>"{project.title} 프로젝트는 아래와 같은 기능이 들어가있어요"</p>
          <ul className="mt-[18px] break-words">
            {project.assignment.map((item, idx) => (
              <li className="flex items-center ml-[20px]" key={idx}>
                <span className="pr-[4px] align-right">
                  <GoDotFill />
                </span>
                <p className="whitespace-pre-wrap my-[0.5em] leading-[1.3em]">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="p-[17px]"></div>
        </div>
        <div className="w-full p-[17px]">
          <img
            className="w-[660px] h-[500px] border solid border-lightGray rounded-[20px]"
            src={project.detail.img}
            alt="detail-images"
          />
        </div>
      </div>
      <div className="w-full p-[20px]">
        <div className="overflow-hidden h-[34px]">&nbsp;</div>
      </div>
    </>
  );
};

export default ProjectCardItem;
