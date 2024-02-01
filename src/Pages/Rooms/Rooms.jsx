import { useEffect, useState } from "react";
import Navbar from "../Shared/Navbar";
import Room from "./Room";
import { FaSearch } from "react-icons/fa";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/rooms")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex justify-end relative">
        <input
          type="text"
          placeholder="Search Room by Price range"
          className="input input-bordered input-primary w-full max-w-xs rounded-full"
        />
        <button className="btn btn-ghost rounded-full absolute right-2">
          <FaSearch></FaSearch>
        </button>
      </div>
      <h1>Avilable Room: {rooms.length}</h1>
      <div className="grid grid-cols-1  gap-6">
        {rooms.map((room) => (
          <Room key={room._id} room={room}></Room>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
