import { PROJECT_LIST } from '@constants/projectList';
import ProjectCardItem from './ProjectCardItem';

const ProjectCard = () => {
  return (
    <div className="flex flex-col mt-[20px] md:mt-[40px]">
      {PROJECT_LIST.map((project) => (
        <ProjectCardItem key={project.id} project={project} />
      ))}
      {/* <div className="px-[15px] fext-black2 text-[18px] text-500">
        <p>
          ✹Created by&nbsp;
          <a
            className="px-[0.2em] pb-[1px] text-black border solid border-black2 rounded-[30em]"
            href="#"
          >
            Feelslikemmmm
          </a>
        </p>
      </div> */}
    </div>
  );
};

export default ProjectCard;
