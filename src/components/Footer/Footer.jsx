import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

import LogoImage from "../../utils/images/icons/logo.jpg";

const Footer = () => {
  return (
    <footer className="footer-bg bg-sky-700 p-10 pb-0">
      <div className="border-b-2 border-white">
        <div className="flex justify-around flex-col lg:flex-row pb-5 md:px-16 lg:px-0">
          <div>
            <Fade direction="left">
              <img src={LogoImage} className="w-28 h-28 rounded-full mb-10" />
              <p className="text-white text-lg lg:w-96">
                Befähigung einer sichereren Welt durch modernste
                Sicherheitslösungen und unerschütterliches Engagement zum Schutz
                von Leben und Vermögen.
              </p>
            </Fade>
          </div>
          <div className="flex flex-col md:flex-row justify-between sm:w-96 mt-10">
            <Fade direction="up">
              <div className="flex flex-col mb-6 md:mb-0">
                <header className="text-xl text-white font-bold mb-4">
                  Links
                </header>
                <Link
                  to="/"
                  className="link link-hover text-white hover:text-yellow-400 my-2"
                >
                  Startseite
                </Link>
                <Link
                  to="/aboutus"
                  className="link link-hover text-white hover:text-yellow-400 my-2"
                >
                  Über uns
                </Link>
                <Link
                  to="/services"
                  className="link link-hover text-white hover:text-yellow-400 my-2"
                >
                  Sicherheitsdienstleistungen
                </Link>{" "}
                <Link
                  to="/career"
                  className="link link-hover text-white hover:text-yellow-400 my-2"
                >
                  Karriere
                </Link>{" "}
                <Link
                  to="/contactus"
                  className="link link-hover text-white hover:text-yellow-400 my-2"
                >
                  Kontaktiere uns
                </Link>
              </div>
            </Fade>
            <Fade direction="up">
              <div className="flex flex-col">
                <header className="text-xl text-white font-bold mb-4">
                  Unternehmen
                </header>
                <Link
                  to="/"
                  className="link link-hover text-white hover:text-yellow-400 my-2"
                >
                  Geschäftsbedingungen
                </Link>
                <Link
                  to="/"
                  className="link link-hover text-white hover:text-yellow-400 my-2"
                >
                  Datenschutzbestimmungen
                </Link>
                <Link
                  to="/aboutus"
                  className="link link-hover text-white hover:text-yellow-400 my-2"
                >
                  FAQs
                </Link>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <p className="text-center text-white text-xl py-5">
        Urheberrecht ©2023 BKF.com
      </p>
    </footer>
  );
};

export default Footer;
