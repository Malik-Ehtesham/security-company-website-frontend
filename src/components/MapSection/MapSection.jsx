const MapSection = () => {
  return (
    <div className="flex justify-center  lg:pt-16 lg:pb-12">
      <div className="px-3 sm:px-0 sm:w-5/6 flex flex-col lg:grid lg:grid-cols-2 lg:gap-4">
        <div className="col-span-1 flex flex-col justify-center mt-5 lg:mt-10 mb-10">
          <p className="text-4xl font-black text-sky-700 mb-5">Unsere Lage</p>
          <p className="text-lg ">
            Unser Sicherheitsunternehmen ist strategisch im Herzen von Munster,
            Deutschland, gelegen. Unsere zentrale Lage in einem lebhaften
            Geschäftsviertel garantiert schnelle Reaktionszeiten und einen
            einfachen Zugang zu unseren Dienstleistungen für Kunden in der
            gesamten Region. Egal, ob Sie umfassende Sicherheitslösungen für Ihr
            Unternehmen benötigen oder persönliche Schutzdienste suchen, unsere
            günstig gelegene Zentrale dient als Dreh- und Angelpunkt für unsere
            Operationen. Besuchen Sie uns in unserer Zentrale, um Ihre
            Sicherheitsbedürfnisse zu besprechen und herauszufinden, wie wir
            Ihre Vermögenswerte schützen und für Seelenfrieden sorgen können.
          </p>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2458.6122116272504!2d7.6258086761927215!3d51.95926267759392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b9bac4bbc39d6b%3A0xc7ad2bc755f6dfc3!2sWindthorststra%C3%9Fe%2063%2C%2048143%20M%C3%BCnster%2C%20Germany!5e0!3m2!1sen!2s!4v1707487728724!5m2!1sen!2s"
            // width="600"
            // height="450"

            //   style="border:0;"
            className="rounded-lg  shadow-lg w-full h-96"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
