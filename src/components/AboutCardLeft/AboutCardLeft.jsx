/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const AboutCardLeft = (props) => {
  return (
    <div className="flex justify-center lg:pt-24 mb-12">
      <div className="sm:w-5/6">
        <div className=" grid grid-cols-1 gap-2  lg:grid-cols-2   ">
          <div className="p-4 pb-0 flex flex-col justify-center  ">
            <p className="text-3xl md:text-5xl  font-black my-5">
              {props.title}
            </p>
            <p className=" text-lg">{props.description}</p>
            <div>
              <Link
                to="/contactus"
                className="btn  btn-info text-white text-lg py-4 px-8 my-8"
              >
                Loslegen
              </Link>
            </div>
          </div>
          <div className="p-4 flex justify-center flex-col">
            <Fade direction="right">
              <div>
                <img src={props.image} className="rounded-lg h-full w-full" />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCardLeft;
