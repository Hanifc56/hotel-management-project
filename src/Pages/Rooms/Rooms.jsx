import { useEffect, useState } from "react";
import Navbar from "../Shared/Navbar";
import Room from "./Room";
import { FaSearch } from "react-icons/fa";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [filtedRoom, setFiltedRoom] = useState([]);
  const handleFilterRoom = (e) => {
    e.preventDefault();
    const form = e.target;
    const price = form.price.value;
    const parsedPrice = parseInt(price);
    console.log(typeof parsedPrice);
    if (price === "") {
      setFiltedRoom(rooms);
    } else {
      const searchedRoom = rooms.filter((room) => room.price <= parsedPrice);
      setFiltedRoom(searchedRoom);
    }
  };
  useEffect(() => {
    fetch("https://hotel-management-server-uztu.onrender.com/rooms")
      .then((res) => res.json())
      .then((data) => {
        setRooms(data);
        setFiltedRoom(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-blue-400">
            Avilable Rooms: {filtedRoom.length}
          </h1>
        </div>
        <div className="flex justify-end relative">
          <form onSubmit={handleFilterRoom}>
            <input
              type="text"
              name="price"
              placeholder="Search Room by Price "
              className="input input-bordered input-primary w-full max-w-xs rounded-full"
            />
            <button className="btn btn-ghost rounded-full absolute right-2">
              <FaSearch></FaSearch>
            </button>
          </form>
        </div>
      </div>
      <div className="grid grid-cols-1  gap-6">
        {filtedRoom.map((room) => (
          <Room key={room._id} room={room}></Room>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
