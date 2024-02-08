import { Link } from "react-router-dom";
import Service1 from "../../utils/images/servicecards/service-1.jpg";
import Service2 from "../../utils/images/servicecards/service-2.jpg";
import Service3 from "../../utils/images/servicecards/service-3.jpg";
import Service4 from "../../utils/images/servicecards/service-4.jpg";
import ServicesCard from "../ServicesCard/ServicesCard";

const ServicesSection = () => {
  return (
    <div className="flex justify-center mt-10  p-2 sm:p-0">
      <div className="sm:w-5/6">
        <div>
          <p className="text-center text-3xl sm:text-5xl font-bold my-2">
            <span className="text-sky-700">Sicherheits</span>-Dienstleistungen
          </p>
          <p className="text-center text-lg sm:text-xl font-medium tracking-wide mb-10 p-8 sm:p-0">
            Herzlich willkommen bei BKF, wo Sicherheit auf Einfachheit trifft.
            Unser Engagement ist klar: Ihre Sicherheit. Unsere maßgeschneiderten
            Lösungen, unterstützt von einem engagierten Team, gewährleisten
            einen Schutzschild um das, was für Sie am wichtigsten ist. Erkunden
            Sie die Gelassenheit mit BKF – hier ist Sicherheit nicht nur ein
            Service; es ist unsere Mission.
          </p>
        </div>

        <div className="flex justify-around  flex-wrap overflow-auto gap-y-5  items-center py-5">
          <ServicesCard title={"Eigentumsschutz"} image={Service1} />
          <ServicesCard title={"Patrouillendienst"} image={Service4} />
          <ServicesCard title={"Bewachung"} image={Service3} />
        </div>
        <div className="flex justify-center my-5">
          <Link
            to="/services"
            className="btn text-white rounded-full  btn-lg btn-info "
          >
            Mehr sehen
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
