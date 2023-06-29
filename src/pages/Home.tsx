import Banner from '@components/Banner';
import Experience from '@components/Experience';
import Footer from '@components/Footer';
import Marquee from '@components/Marquee';
import Project from '@components/Project';
import Stack from '@components/Stack';

const Home = () => {
  return (
    <>
      <Banner />
      <Stack />
      <Experience />
      <Project />
      <Marquee />
      <Footer />
    </>
  );
};

export default Home;
