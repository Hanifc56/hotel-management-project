import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Swal from "sweetalert2";

const RoomDetails = () => {
  const products = useLoaderData();
  const { id } = useParams();
  console.log(id);
  const sellectedProduct = products.find((product) => product._id === id);
  const { name, brand, photo, type, price, rateing, discription } =
    sellectedProduct;

  const handleAddToCart = () => {
    const addedCart = { name, brand, photo, type, price, rateing, discription };
    console.log(addedCart);
    fetch("https://brand-shop-server-bthj.onrender.com/mycart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addedCart),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Added Successfully",
            icon: "success",
            confirmButtonText: "COOL",
          });
        }
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Product Details
            </h2>
            <p className="mt-4 text-gray-500">{discription}</p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{type}</dd>
              </div>
            </dl>
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{brand}</dt>
                <dd className="mt-2 text-sm text-gray-500">${price}</dd>
              </div>
            </dl>
          </div>
          <div className="grid grid-cols-1  gap-4 sm:gap-6 lg:gap-8">
            <img
              src={photo}
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100"
            />
          </div>
        </div>
        <div onClick={handleAddToCart} className="flex my-8 mx-auto w-full">
          <button className="btn btn-outline btn-secondary  w-2/3 mx-auto">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
