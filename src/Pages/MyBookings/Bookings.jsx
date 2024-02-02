import { useContext, useEffect, useState } from "react";
import Navbar from "../Shared/Navbar";
import { AuthContext } from "../../Provider/AuthProvidr";
import Booking from "./Booking";
import Swal from "sweetalert2";

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

  const handleDelteBooking = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = bookings.filter(
                (booking) => booking._id !== id
              );
              setBookings(remaining);
            }
            console.log(data);
          });
      }
    });
  };
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
              <Booking
                key={booking._id}
                booking={booking}
                handleDelteBooking={handleDelteBooking}
              ></Booking>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
