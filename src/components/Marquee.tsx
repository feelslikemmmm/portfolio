const Marquee = () => {
  return (
    <div className="flex flex-col flex-auto whitespace-nowrap overflow-hidden transition duration-[0.3s]">
      <div className="py-[16px] border-t solid border-black">
        <div className="flex text-[6vh] animate-text1 pr-[1.4881vw]">
          <h2 className="flex">
            <p className="font-playfair border solid border-black2 rounded-[30em] px-[0.2em] -pb[1px] transition-all ease-in-out duration-[200ms] hover:text-white hover:bg-black">
              @Feelslikemmmm
            </p>
            &nbsp;made for Portfolio, by &nbsp;
            <p className="font-playfair border solid border-black2 rounded-[30em] px-[0.2em] -pb[1px] transition-all ease-in-out duration-[200ms] hover:text-white hover:bg-black">
              @Feelslikemmmm
            </p>
            &nbsp;—
            <em> portfolio / blog / web site / linkedIn</em>
          </h2>
        </div>
      </div>
      <div className="py-[16px] border-t solid border-black">
        <div className="text-[6vh] animate-text2 pr-[1.4881vw]">
          <h2 className="flex">
            <em>
              Developement, Events, Creatives, Design, Collaboration … there’s
              always something!
            </em>
          </h2>
        </div>
      </div>
      <div className="py-[16px] border-y solid border-black">
        <div className="text-[6vh] animate-text3 pr-[1.4881vw]">
          <h2 className="flex">
            <p className="font-playfair border solid border-black2 rounded-[30em] px-[0.2em] -pb[1px] transition-all ease-in-out duration-[200ms] hover:text-white hover:bg-black">
              Posting At Github
            </p>
            &nbsp;by one commit a day.&nbsp;
            <p className="font-playfair border solid border-black2 rounded-[30em] px-[0.2em] -pb[1px] transition-all ease-in-out duration-[200ms] hover:text-white hover:bg-black">
              Posting At Github
            </p>
            &nbsp;by one commit a day.&nbsp;
            <p className="font-playfair border solid border-black2 rounded-[30em] px-[0.2em] -pb[1px] transition-all ease-in-out duration-[200ms] hover:text-white hover:bg-black">
              Posting At Github
            </p>
            &nbsp;by one commit a day.&nbsp;
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
