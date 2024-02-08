import { Fade } from "react-awesome-reveal";
import Service1 from "../../utils/images/servicecards/service-1.jpg";
import Service2 from "../../utils/images/servicecards/service-2.jpg";
import Service3 from "../../utils/images/servicecards/service-3.jpg";
import Service4 from "../../utils/images/servicecards/service-4.jpg";
import Service5 from "../../utils/images/servicecards/service-5.jpg";
import Service6 from "../../utils/images/servicecards/service-6.jpg";
import Service7 from "../../utils/images/servicecards/service-7.jpg";
import Service8 from "../../utils/images/servicecards/service-8.jpg";
import Service9 from "../../utils/images/servicecards/service-9.jpg";
import ServicesCard from "../ServicesCard/ServicesCard";

const ServicesPageSection = () => {
  return (
    <div className="flex justify-center lg:pt-24  ">
      <div className="md:w-5/6 p-2 md:p-0">
        <Fade direction="left">
          <div>
            <p className="text-center text-3xl sm:text-5xl font-bold my-2">
              <span className="text-sky-700">Sicherheits</span>-Dienstleistungen
            </p>
            <p className="text-center text-lg sm:text-xl font-medium tracking-wide mb-10 p-5 sm:p-0">
              Willkommen bei BKF, wo Sicherheit auf Einfachheit trifft. Unser
              Engagement ist klar: Ihre Sicherheit. Unsere maßgeschneiderten
              Lösungen, unterstützt von einem engagierten Team, gewährleisten
              einen Schutzschild um das, was für Sie am wichtigsten ist.
              Entdecken Sie das beruhigende Gefühl mit BKF – hier ist Sicherheit
              nicht nur ein Service; es ist unsere Mission.
            </p>
          </div>
        </Fade>
        <div className="flex justify-around  flex-wrap overflow-auto gap-y-5  items-center py-5">
          <ServicesCard
            title={"Objektschutz"}
            image={Service1}
            description="Sichern Sie die Sicherheit und den Schutz Ihres Eigentums mit unserem umfassenden Objektschutz. Bei BKF haben wir es uns zur Priorität gemacht, Ihre Vermögenswerte zu schützen. Unser Expertenteam setzt modernste Technologien und strategische Lösungen ein, um Risiken zu minimieren und potenzielle Bedrohungen abzuschrecken. Von Wohnimmobilien bis zu Gewerbeimmobilien gewährleistet unser maßgeschneiderter Ansatz eine aufmerksame und reaktionsschnelle Sicherheitspräsenz. Vertrauen Sie uns, um das zu schützen, was für Sie am wichtigsten ist, und bieten Sie Eigentümern und Insassen gleichermaßen ein beruhigendes Gefühl."
          />
          <ServicesCard
            title={"Bewachung"}
            image={Service3}
            description="Bewachung mit Präzision und Wachsamkeit: Unser Sicherheitspersonal bei BKF steht als unerschütterliche Wächter da, die sich der Sicherung Ihrer Räumlichkeiten und Vermögenswerte verschrieben haben. Sorgfältig geschult und äußerst professionell bieten unsere Wächter eine sichtbare Abschreckung gegen potenzielle Bedrohungen und gewährleisten eine sichere Umgebung. Egal, ob es um die Sicherung Ihres Unternehmens, Ihrer Residenz, Ihrer Veranstaltung oder Ihrer Baustelle geht – unser Bewachungsdienst ist Ihre Verteidigungslinie. Vertrauen Sie BKF für einen robusten Bewachungsdienst, der die Erwartungen übertrifft."
          />
          <ServicesCard
            title={"Patrouillendienst"}
            image={Service4}
            description="
            Engagieren Sie sich in der proaktiven Verteidigung Ihrer Räumlichkeiten mit unserem Patrouillendienst. Unser hochqualifiziertes Sicherheitspersonal führt aufmerksame Streifengänge durch, um eine sichtbare und abschreckende Präsenz sicherzustellen. Ob Sicherung von Wohngebieten, Gewerberäumen oder Veranstaltungsorten – unsere Streifen sind darauf ausgerichtet, Sicherheitsverletzungen zu verhindern und schnell auf aufkommende Bedrohungen zu reagieren. Mit Fokus auf Prävention spielt unser Patrouillendienst eine entscheidende Rolle für die Aufrechterhaltung einer sicheren Umgebung. Wählen Sie einen proaktiven Ansatz zur Sicherheit mit BKF."
          />
          <ServicesCard
            title={"Baustellenüberwachung"}
            image={Service5}
            description="Unser Service zur Überwachung von Baustellen ist Ihr wachsames Auge auf der Baustelle. Bei BKF verstehen wir die einzigartigen Sicherheitsherausforderungen von Baustellen. Unsere umfassenden Überwachungslösungen bieten Echtzeitüberwachung, Zugangskontrolle und Risikomanagement. Mit fortschrittlichen Technologien und geschultem Personal gewährleisten wir die Sicherheit Ihrer Baustelle. Arbeiten Sie mit uns zusammen, um Ihr Bauprojekt mit robuster Sicherheit zu stärken und sich auf den Fortschritt mit ruhigem Gewissen zu konzentrieren."
          />
          <ServicesCard
            title={"Doorman"}
            image={Service6}
            description="
            Erhöhen Sie die Sicherheit Ihres Unternehmens mit unserem Premium-Türsteherdienst. Unsere höflichen und professionellen Türsteher sind nicht nur Wächter des Eingangs; sie verkörpern eine einladende und sichere Umgebung. Geschult, eine nahtlose Mischung aus Gastfreundschaft und Sicherheit zu bieten, stellen unsere Türsteher sicher, dass jeder Eintritt kontrolliert wird, jeder Gast mit Respekt begrüßt wird und Ihre Räumlichkeiten geschützt sind. Vertrauen Sie darauf, dass wir an vorderster Front stehen und Ihre Räumlichkeiten mit höchstem Professionalismus schützen."
          />
          <ServicesCard
            title={"Event Schutz"}
            image={Service7}
            description="Bei BKF steht Ihre Sicherheit an erster Stelle. Unser spezialisierter Schutzdienst bietet maßgeschneiderte Sicherheitslösungen für Veranstaltungen jeder Art. Unser erfahrenes Team arbeitet eng mit Ihnen zusammen, um eine umfassende Sicherheitsstrategie zu entwickeln, angefangen bei der Risikobewertung bis hin zur Durchführung. Vertrauen Sie uns für eine sichere und erfolgreiche Veranstaltung, die einen bleibenden Eindruck bei Ihren Gästen hinterlässt."
          />
          <ServicesCard
            title={"Hostessen"}
            image={Service8}
            description="
            Unser Hostessen-Service ist darauf ausgerichtet, Ihre Veranstaltungen zu bereichern und bei Ihren Gästen einen bleibenden Eindruck zu hinterlassen. Unser Team aus erfahrenen und professionellen Hostessen setzt sich dafür ein, erstklassige Gastfreundschaft zu bieten und für reibungslose und angenehme Erlebnisse für Ihre Teilnehmer zu sorgen. Von herzlichen Begrüßungen bis zur effizienten Eventkoordination tragen unsere Hostessen zum Gesamterfolg Ihrer Veranstaltung bei. Wählen Sie unseren Hostessen-Service für Veranstaltungen, die einen nachhaltig positiven Eindruck hinterlassen."
          />
          <ServicesCard
            title={"Empfangsdienste"}
            image={Service9}
            description="Unsere Empfangsdienste definieren den ersten Eindruck neu und bieten einen nahtlosen und professionellen Empfang für Ihre Gäste und Kunden. Bei BKF verstehen wir die Bedeutung eines positiven ersten Zusammentreffens. Vom Management von Besucheranmeldungen bis zur höflichen und präzisen Bearbeitung von Anfragen zielen unsere Empfangsdienste darauf ab, die Gastfreundschaftsstandards Ihres Unternehmens zu erhöhen. Vertrauen Sie darauf, dass wir das Gesicht Ihres Unternehmens sind und eine einladende Atmosphäre schaffen, die einen bleibenden Eindruck hinterlässt."
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesPageSection;
