import { Link } from "react-router-dom";

const Promotion = () => {
  return (
    <div>
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
              freebies like spa treatments, nature walks, and more. Your escape
              awaits—book now for a blissful stay! 🌟 #TravelJoy #HotelDeals
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
  );
};

export default Promotion;
