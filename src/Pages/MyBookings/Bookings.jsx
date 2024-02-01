import { useContext, useEffect, useState } from "react";
import Navbar from "../Shared/Navbar";
import { AuthContext } from "../../Provider/AuthProvidr";
import Booking from "./Booking";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/bookings?email=${user.email}`;
  useEffect(() => {
    fetch(url, {})
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, [url]);
  return (
    <div>
      <Navbar></Navbar>
      <h1 className="text-2xl font-bold text-blue-400 text-center">
        Booked Rooms: {bookings.length}
      </h1>
      <div className="overflow-x-auto lg:mx-auto lg:my-12">
        <table className="table">
          <tbody className="grid  justify-center">
            {bookings.map((booking) => (
              <Booking key={booking._id} booking={booking}></Booking>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
