import IndexPageContent from './IndexPageContent';
import StackCard from './StackCard';
const Stack = () => {
  return (
    <IndexPageContent>
      <div className="overflow-visible flex flex-col text-black2">
        <div className="flex flex-wrap justify-between items-end px-[17px] pb-[17px] tracking-[-.02em]">
          <div className="font-[600]">
            <h3 className="text-[24px] md:text-[32px]">
              Stack <br />
              <em>For Web Developement</em>
            </h3>
          </div>
          <div className="pt-[10px] font-[500]">
            <div className="flex items-center text-sm md:text-lg">
              <p className="py-[5px] px-[20px] border solid border-black rounded-[300px] transition-all ease-in-out duration-[200ms] hover:bg-black hover:text-[#fff]">
                Stack
              </p>
              <p className="px-[5px]">and</p>
              <p className="py-[5px] px-[20px] border solid border-black rounded-[300px] transition-all ease-in-out duration-[200ms] hover:bg-black hover:text-[#fff]">
                FrameWork & Library
              </p>
            </div>
          </div>
        </div>
      </div>
      <StackCard />
    </IndexPageContent>
  );
};

export default Stack;
