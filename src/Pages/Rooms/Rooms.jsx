import Navbar from "../Shared/Navbar";

const Rooms = () => {
  return (
    <div>
      <Navbar></Navbar>
      <h1>All rooms</h1>
      <div className="flex justify-end">
        <input
          type="text"
          placeholder="Search Room by Price range"
          className="input input-bordered input-primary w-full max-w-xs rounded-full"
        />
        <button>Search</button>
      </div>
    </div>
  );
};

export default Rooms;
