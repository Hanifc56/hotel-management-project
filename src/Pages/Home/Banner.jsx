import { ParallaxBanner } from "react-scroll-parallax";
const Banner = () => {
  return (
    <div className="rounded-lg">
      <ParallaxBanner
        layers={[
          {
            image: "https://i.ibb.co/kDTTYC3/pexels-pixabay-164175.jpg",
            speed: -40,
          },
          {
            image:
              "https://i.ibb.co/xfLDhnc/pexels-pixabay-258154-removebg-preview.png",
            speed: -10,
          },
        ]}
        className="aspect-[2/1] rounded-lg"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div>
            <h1 className="text-5xl text-white font-semibold">
              Welcome to Our Hotel!
            </h1>
            <p className="text-white font-medium text-center">
              We provide best Solution for your Comfort and safety
            </p>
          </div>
        </div>
      </ParallaxBanner>
    </div>
  );
};
export default Banner;
