import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import Banner from "./Banner";
import NewsLetter from "./NewsLetter";
import Promotion from "./Promotion";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Promotion></Promotion>
      <Testimonial></Testimonial>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </div>
  );
};

export default Home;
