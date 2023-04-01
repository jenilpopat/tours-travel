import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/2.jpg";
import Footer from "../components/Footer";
import ContactFrom from "../components/ContactFrom";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroimg={AboutImg}
        title="Contact"
        btnClass="hide"
      />
      <ContactFrom />
      <Footer />
    </>
  );
}

export default Contact;
