import { useEffect } from "react";
import ContactUsSection from "../ContactUsSection/ContactUsSection";
import CtaSection from "../CtaSection/CtaSection";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import QuestionSection from "../QuestionSection/QuestionSection";
import MapSection from "../MapSection/MapSection";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <ContactUsSection />
      <MapSection />
      <QuestionSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default ContactUs;
