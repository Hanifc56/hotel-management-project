import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <main className="grid lg:grid-cols-4 md:grid-rows-2-2 min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 gap-5">
        <div className="text-center md:row-span-1 lg:col-span-2">
          <p className="text-base font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Go back home
            </Link>
            <button className="text-sm font-semibold text-gray-900">
              Contact support <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </div>
        <div className=" lg:col-span-2 ">
          <img
            src="https://i.ibb.co/5k53M2x/desert-1270345-1280.jpg"
            alt=""
            className="rounded-lg"
          />
        </div>
      </main>
    </>
  );
};

export default ErrorPage;
