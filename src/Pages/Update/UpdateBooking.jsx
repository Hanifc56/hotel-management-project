import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { FaCheckCircle } from "react-icons/fa";
import Swal from "sweetalert2";

const UpdateBooking = () => {
  const booking = useLoaderData();
  console.log(booking);
  const {
    _id,
    customerName,
    email,
    date,
    room,
    price,
    image,
    roomType,
    roomSize,
  } = booking;
  const handleBookingUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const date = form.date.value;

    console.log(date);

    fetch(`https://hotel-management-server-uztu.onrender.com/bookings/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ date: date }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Completed",
            text: "Updated succesful",
            icon: "success",
          });
        }
        console.log(data);
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Update Booking
            </h2>
            <p className="mt-4 text-xl font-semibold text-gray-500">
              {roomType}
            </p>
            <p className="mt-4 text-xl font-medium">
              Customer Name: {customerName}
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-semibold text-2xl text-gray-900">
                  Room Id:
                </dt>
                {room}
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">
                  <FaCheckCircle className="inline-block mr-2" />
                  {email}
                </dt>
                <dd className="mt-2 text-lg text-gray-500">Price: ${price}</dd>
                <dd className="mt-2 text-lg text-gray-500">
                  Room size: {roomSize}
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-semibold text-2xl text-gray-900">
                  Booked Date:
                </dt>
                {date}
              </div>

              <div className="border-t border-gray-200 pt-4">
                <form onSubmit={handleBookingUpdate}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Update Booking Date</span>
                    </label>
                    <input
                      type="date"
                      placeholder="Pick a date to book"
                      name="date"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="flex mb-8 justify-center w-full ">
                    <button className="btn btn-outline btn-secondary  w-full my-4 items-center">
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </dl>
          </div>
          <div className="grid grid-cols-1  gap-4 sm:gap-6 lg:gap-8">
            <img
              src={image}
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateBooking;
