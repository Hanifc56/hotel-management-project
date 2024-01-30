import { FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10">
        <aside>
          <div className="max-w-40">
            <img
              src="https://i.ibb.co/2dpMy0S/black-4x.png"
              className="pl-2 w-full"
              alt=""
            />
          </div>
          <p className="font-bold text-3xl">
            <span className="text-lg font-semibold">
              {" "}
              Providing best service in hotels since 2000
            </span>
          </p>
          <p>
            <small>Copyright © 2024 - All right reserved</small>
          </p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4 text-2xl">
            <a>
              <FaTwitter></FaTwitter>
            </a>
            <a>
              <FaYoutube></FaYoutube>
            </a>
            <a>
              <FaFacebook></FaFacebook>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
