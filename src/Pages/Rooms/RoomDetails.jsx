import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Swal from "sweetalert2";
import { FaCheckCircle } from "react-icons/fa";

const RoomDetails = () => {
  const room = useLoaderData();
  const { id } = useParams();
  console.log(id);

  const {
    _id,
    roomImg,
    roomType,
    reviews,
    description,
    availability,
    features,
    price,
    roomSize,
    details,
    specialOffers,
  } = room;

  const handleAddToCart = () => {
    const addedCart = {
      _id,
      roomImg,
      roomType,
      reviews,
      description,
      availability,
      features,
      price,
      roomSize,
      details,
      specialOffers,
    };
    console.log(addedCart);
    fetch(`http://localhost:5000/rooms/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addedCart),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Added Successfully",
            icon: "success",
            confirmButtonText: "COOL",
          });
        }
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Room Details
            </h2>
            <p className="mt-4 text-xl font-semibold text-gray-500">
              {description}
            </p>
            <p className="mt-4 text-xl font-medium">Room Details: {details}</p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-semibold text-2xl text-gray-900">
                  {roomType}
                </dt>
                {features.map((feature, idx) => (
                  <dd className="mt-2 text-lg text-gray-500" key={idx}>
                    {feature}
                  </dd>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-semibold text-2xl text-gray-900">
                  Spcial Offers:
                </dt>
                {specialOffers.map((offer, idx) => (
                  <dd className="mt-2 text-lg text-gray-500" key={idx}>
                    {offer}
                  </dd>
                ))}
              </div>{" "}
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-semibold text-2xl text-gray-900">
                  Reviews:
                </dt>
                {reviews.map((review) => (
                  <dd className="mt-2 text-lg text-gray-500" key={review.id}>
                    <div className="card bg-gray-100 p-4">
                      <div className="">
                        <h2 className="card-title">{review.comment}</h2>
                        <p>
                          <small>{review.username}</small>
                        </p>
                        <p>
                          <small>{review.timestamp}</small>
                        </p>
                      </div>
                    </div>
                  </dd>
                ))}
              </div>{" "}
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">
                  <FaCheckCircle className="inline-block mr-2" />
                  {availability}
                </dt>
                <dd className="mt-2 text-lg text-gray-500">Price: ${price}</dd>
                <dd className="mt-2 text-lg text-gray-500">
                  Room size: {roomSize}
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <form>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="date"
                      placeholder="Pick a date to book"
                      name="date"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </form>
              </div>
            </dl>
          </div>
          <div className="grid grid-cols-1  gap-4 sm:gap-6 lg:gap-8">
            <img
              src={roomImg}
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100"
            />
          </div>
        </div>
        <div
          onClick={handleAddToCart}
          className="flex mb-8 justify-center w-full "
        >
          <Link to="">
            <button className="btn btn-outline btn-secondary  w-full my-4 items-center">
              Book Now!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
