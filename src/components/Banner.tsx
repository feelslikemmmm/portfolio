import BannerImage from '@assets/images/banner/banner.png';
import IndexPageContent from './IndexPageContent';
const Banner = () => {
  return (
    <IndexPageContent>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col">
          <div className="px-[17px] pb-[30px]">
            <h1 className="tracking-[-0.06em] text-[4rem] font-playfair font-bold leading-[.95em] md:text-[160px]">
              Creative
              <br />
              Developer
            </h1>
          </div>
          <div className="px-[17px]">
            <p>
              창의적이고, 배움을 좋아하며, 변화를 두려워하지않는 개발자입니다
            </p>
            <p>
              이 마인드는 작은 디테일을 놓치지 않고 개발에 진심을 담기게하며
              <br /> 가장 자랑스럽게 생각하는 소개이기도 합니다.
            </p>
            <p>지금부터, 제가 걸어온 여정을 소개해드릴게요!</p>
          </div>
        </div>
        <div className="w-full flex md:justify-end">
          <img src={BannerImage} alt="bannerimage" />
        </div>
      </div>
    </IndexPageContent>
  );
};

export default Banner;
