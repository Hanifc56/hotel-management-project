import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home";
import Rooms from "../Pages/Rooms/Rooms";
import PrivetRoutes from "./PrivetRoutes";
import Bookings from "../Pages/MyBookings/Bookings";
import RoomDetails from "../Pages/Rooms/RoomDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AboutUs from "../Pages/AboutUs/About";
import Contact from "../Pages/ContactUs/Contact";
import UpdateBooking from "../Pages/Update/UpdateBooking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/rooms",
        element: <Rooms></Rooms>,
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contacts",
        element: <Contact></Contact>,
      },
      {
        path: "/mybookings",
        element: (
          <PrivetRoutes>
            <Bookings></Bookings>
          </PrivetRoutes>
        ),
      },

      {
        path: "/roomDetails/:id",
        element: (
          <PrivetRoutes>
            <RoomDetails></RoomDetails>
          </PrivetRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/rooms/${params.id}`),
      },
      {
        path: "/updateDetails/:id",
        element: (
          <PrivetRoutes>
            <UpdateBooking></UpdateBooking>
          </PrivetRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/bookings/${params.id}`),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
