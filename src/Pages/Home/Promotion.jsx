import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

const Promotion = () => {
  return (
    <div>
      <div
        data-aos="zoom-out-left"
        data-aos-offset="200"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <div className="hero my-12 rounded-xl">
          <div className="hero-content flex-col lg:flex-row">
            <div className="w-1/2">
              <img
                src="https://i.ibb.co/W6GjwV8/m010t0655-d-sale-banner-03mar23.jpg"
                className="lg:max-w-lg max-w-sm rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h1 className="text-4xl font-semibold">
                Unforgettable Stay, Irresistible Offers!
              </h1>
              <p className="py-6 font-medium text-lg">
                Dive into delight with our hotel offers! Experience luxury with
                panoramic views, cozy cabins, or pet-friendly suites. Enjoy
                freebies like spa treatments, nature walks, and more. Your
                escape awaits—book now for a blissful stay! 🌟 #TravelJoy
                #HotelDeals
              </p>
              <Link to="/rooms">
                <button className="btn btn-outline btn-secondary">
                  Book Now!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
