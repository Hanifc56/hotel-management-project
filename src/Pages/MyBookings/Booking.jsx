const Booking = ({ booking }) => {
  const { customerName, email, date, room, price, image, roomType, roomSize } =
    booking;
  return (
    <div>
      <tr>
        <th>
          <button className="btn btn-circle btn-outline btn-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </th>
        <td>
          <div className="avatar">
            <div className="mask mask-squircle w-24 h-24">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </td>
        <td>
          <div className="font-bold">{roomType}</div>
          <div className="text-sm opacity-50">{roomSize}</div>
        </td>
        <td>{customerName}</td>
        <td>${price}</td>
        <td>{date}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </div>
  );
};

export default Booking;
