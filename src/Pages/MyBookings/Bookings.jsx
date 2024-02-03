import { useContext, useEffect, useState } from "react";
import Navbar from "../Shared/Navbar";
import { AuthContext } from "../../Provider/AuthProvidr";
import Booking from "./Booking";
import Swal from "sweetalert2";
import moment from "moment";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `https://hotel-management-server-uztu.onrender.com/bookings?email=${user.email}`;
  useEffect(() => {
    fetch(url, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, [url]);

  const handleDelteBooking = (id) => {
    const book = bookings.find((booking) => booking._id === id);
    const date = book.date;
    const dateString = date;
    const targetDate = moment(dateString, "YYYY-MM-DD");
    const currentDate = moment();
    const dayDifference = currentDate.diff(targetDate, "days");
    console.log(dayDifference);
    if (dayDifference === 0) {
      return Swal.fire({
        title: "Alert!",
        text: "You have to cancel before 1 day!",
        icon: "warning",
      });
    }
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
        fetch(
          `https://hotel-management-server-uztu.onrender.com/bookings/${id}`,
          {
            method: "DELETE",
          }
        )
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
