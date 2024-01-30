import Navbar from "../Shared/Navbar";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

const Contents = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-indigo-600">
                  Faster Planning
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Unleashing the Extraordinary: Our Exclusive Annual Event
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  Join us for an unforgettable experience at our annual event,
                  where we are set to unveil a world of excitement and
                  innovation. <q>Unleashing the Extraordinary </q> is not just
                  an event; it is a celebration of creativity, collaboration,
                  and cutting-edge ideas.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src="https://i.ibb.co/gSM7H5Z/pexels-craig-adderley-2306277.jpg"
              alt=""
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p>
                  where we invite you to embark on a journey of discovery,
                  innovation, and inspiration. This event is not merely a
                  gathering; it is a celebration of the remarkable strides we
                  have made and a glimpse into the limitless potential that lies
                  ahead.
                </p>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Inspirational Keynote Presentations:
                      </strong>{" "}
                      Immerse yourself in thought-provoking keynote
                      presentations by renowned industry leaders and
                      visionaries. Gain invaluable insights into the latest
                      trends, emerging technologies, and transformative ideas
                      shaping our world.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Interactive Workshops and Masterclasses:
                      </strong>{" "}
                      Elevate your skills and knowledge through hands-on
                      workshops and masterclasses. Our carefully curated
                      sessions cater to a diverse audience, offering
                      opportunities for both beginners and seasoned
                      professionals to delve deep into their areas of interest.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircleIcon
                      className="mt-1 h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Networking Extravaganza:
                      </strong>{" "}
                      Forge meaningful connections during dedicated networking
                      sessions. Engage with professionals, entrepreneurs, and
                      enthusiasts from various industries. The event provides a
                      conducive environment for fostering collaborations and
                      expanding your professional network.
                    </span>
                  </li>
                </ul>
                <p className="mt-8">
                  where we invite you to embark on a journey of discovery,
                  innovation, and inspiration. This event is not merely a
                  gathering; it is a celebration of the remarkable strides we
                  have made and a glimpse into the limitless potential that lies
                  ahead.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  Unplanned? No problem.
                </h2>
                <p className="mt-6">
                  Mark your calendars for Event Date at Venue. Be part of an
                  extraordinary gathering that promises to leave you inspired
                  and energized. Do not miss this opportunity to be part of
                  <q>Unleashing the Extraordinary</q>- a convergence of
                  brilliance, creativity, and limitless possibilities. Reserve
                  your spot now and be prepared for an event like no other.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contents;
