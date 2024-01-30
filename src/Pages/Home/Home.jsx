import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import Banner from "./Banner";
import NewsLetter from "./NewsLetter";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Testimonial></Testimonial>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </div>
  );
};

export default Home;
