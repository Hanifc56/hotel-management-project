const Booking = ({ booking }) => {
  const { customerName, email, date, room, price, image, roomType, roomSize } =
    booking;
  return (
    <div>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-24 h-24">
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{roomType}</div>
              <div className="text-sm opacity-50">{roomSize}</div>
            </div>
          </div>
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
