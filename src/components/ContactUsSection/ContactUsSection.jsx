import ContactUsForm from "../ContactUsForm/ContactUsForm";

const ContactUsSection = () => {
  return (
    <div className="flex justify-center lg:pt-40 lg:pb-20">
      <div className="px-3 sm:px-0 sm:w-5/6 flex flex-col lg:grid lg:grid-cols-2 lg:gap-2">
        <div className="col-span-1 flex flex-col justify-center mt-5 lg:mt-10 mb-10">
          <p className="text-4xl font-black text-sky-700 mb-5">
            Nehmen Sie Kontakt mit BKF auf
          </p>
          <p className="text-lg ">
            Ganz gleich, ob Sie Fragen haben, weitere Informationen zu unseren
            Sicherheitsdienstleistungenn benötigen oder eine maßgeschneiderte
            Lösung für Ihre spezifischen Anforderungen besprechen möchten, wir
            sind für Sie da. Bitte nutzen Sie das Kontaktformular, um mit uns
            Kontakt aufzunehmen. Unser engagiertes Team wird umgehend auf Ihre
            Fragen antworten und Ihnen die Unterstützung bieten, die Sie
            benötigen. Vielen Dank, dass Sie BKF für Ihre
            Sicherheitsanforderungen in Betracht gezogen haben.
          </p>
        </div>
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactUsSection;
