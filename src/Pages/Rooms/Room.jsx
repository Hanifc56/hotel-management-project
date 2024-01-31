import { Link } from "react-router-dom";

const Room = ({ room }) => {
  const { _id, roomImg, roomType, reviews, description, availability } = room;
  return (
    <div>
      <div className="hero my-12 rounded-xl border">
        <div className="hero-content flex-col lg:flex-row ">
          <div className="lg:w-1/2">
            <img
              src={roomImg}
              className="lg:max-w-md max-w-sm rounded-lg shadow-2xl"
            />
          </div>
          <div className="flex justify-center items-center">
            <div>
              <h1 className="text-xl font-semibold">{roomType}</h1>
              <span className="badge badge-secondary">{availability}</span>
              <p className="py-2 font-medium text-lg">{description}</p>
              <p className="py-2 font-medium text-lg">
                reviews: {reviews.length}
              </p>

              <Link to={`/roomDetails/${_id}`}>
                <button className="btn btn-outline btn-secondary">
                  Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
