import { Link } from "react-router-dom";
import "./HomeSection.css";
import { TypeAnimation } from "react-type-animation";

const HomeSection = () => {
  return (
    <div className="sm:flex sm:justify-center">
      <div className="sm:w-5/6">
        <div className="flex flex-col  my-20 lg:my-52 2xl:my-56 p-5 px-5 sm:px-0">
          <p className="text-4xl min-[500px]:text-4xl xl:text-6xl  font-black text-white">
            Ihre Sicherheit, unsere Priorität
          </p>
          <p className="text-3xl min-[500px]:text-4xl xl:text-6xl  font-bold sm:font-black text-sky-600">
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                500,
                "Für Sicherheit über Grenzen hinweg sorgen", // initially rendered starting point
                1000,
                "Erhöhung der Sicherheitsstandards",
                1000,
                "Ihre vertrauenswürdige Sicherheitslösung",
                500,
              ]}
              speed={25}
              repeat={Infinity}
            />
          </p>
          <div>
            <Link
              to="/contactus"
              className="btn btn-info  md:btn-lg my-6 text-white mx-1"
            >
              Loslegen
            </Link>
            <Link
              to="/aboutus"
              className="btn btn-warning  md:btn-lg my-6  text-white mx-4"
            >
              Erfahren Sie mehr
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
