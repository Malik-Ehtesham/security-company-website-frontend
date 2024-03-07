import QuestionAccordion from "../QuestionAccordion/QuestionAccordion";
// import "./AboutQuestionSection.css";
const AboutQuestionSection = () => {
  return (
    <div className=" flex justify-center flex-col items-center py-5">
      <div className="sm:w-5/6">
        <p className=" text-center text-3xl md:text-4xl lg:text-5xl font-black">
          Any <span className="text-sky-700">Fragen?</span>
        </p>
        <p className=" text-center text-3xl md:text-4xl lg:text-5xl font-black">
          Wir haben Antworten!
        </p>
      </div>
      <div className="my-5 mt-10 flex flex-col justify-center items-center ">
        <QuestionAccordion
          question="Welche Sicherheitsdienstleistungen bieten Sie an?"
          answer="Wir bieten eine umfassende Palette von Sicherheitsdienstleistungen an, einschließlich Überwachung, Zugangskontrolle, Alarmanlagen und Sicherheitspersonal für sowohl private als auch kommerzielle Anforderungen."
        />
        <QuestionAccordion
          question="Wie kann ich eine Sicherheitsbewertung für mein Grundstück anfordern?"
          answer="Die Beantragung einer Sicherheitsbewertung ist einfach. Nutzen Sie unser Kontaktformular, um eine Beratung anzufordern, und wir werden umgehend eine Bewertung planen. Unser Team wird dann basierend auf Ihren einzigartigen Anforderungen maßgeschneiderte Sicherheitslösungen empfehlen."
        />
        <QuestionAccordion
          question="Was macht Ihr Sicherheitspersonal anders?"
          answer="Unser Sicherheitspersonal zeichnet sich durch strenge Schulung, Auswahl nach Fachkenntnissen, Professionalität und einem festen Engagement für die Sicherheit unserer Kunden aus. Sie bilden einen integralen Bestandteil unserer umfassenden Sicherheitsansätze."
        />
        <QuestionAccordion
          question="Kann ich bestehende Sicherheitssysteme mit Ihren Dienstleistungen integrieren?"
          answer="Selbstverständlich. Wir haben uns darauf spezialisiert, unsere Sicherheitslösungen nahtlos in Ihre aktuellen Systeme zu integrieren und so eine verbesserte Funktionalität und eine zusammenhängende Sicherheitsinfrastruktur zu gewährleisten, die Ihren spezifischen Anforderungen entspricht."
        />
        <QuestionAccordion
          question="Bieten Sie 24/7 Überwachungsdienste an?"
          answer="Ja, unser Engagement für Ihre Sicherheit erstreckt sich rund um die Uhr. Unsere 24/7 Überwachungsdienste garantieren kontinuierlichen Schutz mit schnellen Reaktionen auf mögliche Sicherheitsvorfälle."
        />
        <QuestionAccordion
          question="Wie gehen Sie mit Notfallsituationen um?"
          answer="In Notfallsituationen folgt unser Team detaillierten Reaktionsplänen, handelt schnell und effizient, um die Situation zu bewältigen. Wir arbeiten auch nahtlos mit örtlichen Behörden zusammen, wenn erforderlich, und gewährleisten so eine umfassende Notfallreaktion."
        />
        <QuestionAccordion
          question="Kann ich Sicherheitspakete nach meinen Bedürfnissen anpassen?"
          answer="Absolut. Wir verstehen, dass jeder Kunde einzigartige Sicherheitsanforderungen hat. Unser Team arbeitet eng mit Ihnen zusammen, um personalisierte Sicherheitspakete zu erstellen, die Ihre spezifischen Anliegen ansprechen und eine maßgeschneiderte Lösung bieten."
        />
        <QuestionAccordion
          question="In welchen Gebieten bieten Sie Sicherheitsdienstleistungen an?"
          answer="Unsere Dienstleistungen erstrecken sich über [Liste der Gebiete/Städte/Regionen, die Sie abdecken]. Kontaktieren Sie uns gerne, um die Verfügbarkeit an Ihrem speziellen Standort zu erfragen und Ihre Sicherheitsbedürfnisse zu besprechen."
        />
        <QuestionAccordion
          question="Wie kann ich mit Ihrem Team für weitere Informationen in Kontakt treten?"
          answer="Die Kontaktaufnahme ist einfach. Sie können uns über unser benutzerfreundliches Kontaktformular auf der Website erreichen, unsere dedizierte Telefonleitung anrufen oder während der regulären Geschäftszeiten unser Büro besuchen. Unser Team steht bereit, um bei Anfragen oder Anliegen zu helfen."
        />
        <QuestionAccordion
          question="Entsprechen Ihre Dienstleistungen den Branchenstandards?"
          answer="Ja, wir sind stolz darauf, uns an die höchsten Branchenstandards und Vorschriften zu halten. Unsere Sicherheitsdienstleistungen sind darauf ausgelegt, die Sicherheitsanforderungen der relevanten Behörden zu erfüllen oder sogar zu übertreffen und so höchste Zuverlässigkeit und Professionalität in jeder Hinsicht unserer Angebote zu gewährleisten."
        />
      </div>
    </div>
  );
};

export default AboutQuestionSection;
