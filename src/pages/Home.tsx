import Hero from '../components/Hero';
import FeaturedCategories from '../components/FeaturedCategories';
import NewArrivals from '../components/NewArrivals';
import Lookbook from '../components/Lookbook';
import ArtisanShowcase from '../components/ArtisanShowcase';
import TextParallax from '../components/TextParallax';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import InstagramGrid from '../components/InstagramGrid';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <TextParallax text="Handcrafted Silk" />
      <ArtisanShowcase />
      <NewArrivals />
      <TextParallax text="Timeless Grace" />
      <Lookbook />
      <About />
      <Testimonials />
      <InstagramGrid />
      <Newsletter />
    </>
  );
};

export default Home;
