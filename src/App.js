import './App.css';
import logo from "./assets/logo.png";
import "./index.css";
import "./tailwind.output.css";

import { useEffect, useState } from 'react';
import About from './components/About';
import Footer from './components/Footer';
import GallerySlider from './components/GallerySlider';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import Location from './components/Location';
import Hero from './components/Hero';
import Header from './components/Header';
import FloatingButtons from './components/FloatingButtons';
import FAQ from './components/FAQ';

import AOS from "aos";
import "aos/dist/aos.css";
import Stats from './components/Stats';
import { motion } from "framer-motion";
import Map from './components/Map';
import WhyChooseUs from './components/WhyChooseUs';
import Thankyou from './components/modal/Thankyou';
import ReviewsSection from './components/ReviewSection';
import Appointment from './components/modal/Appointment';


function App() {
  const phoneNumber = "+917400239212";
  const whatsappNumber = "917400239212";
  const [showModal, setShowModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [active, setActive] = useState("home");
  const [isSubmitted, setIsSubmitted] = useState(false);
  

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  

  return (
    <>

      <div id="home" className="font-sans bg-[#F9FAFB] text-[#2C2C2C]">
        {/* Header */}
        <Header logo={logo} active={active} setActive={setActive} />

        {/* Top Banner */}
        <div className="bg-[#2ECC71] text-white text-center py-2 text-sm">
          Mon - Sat | Morning: 10:00 AM – 1:00 PM | Evening: 06:00 PM – 9:00 PM | Sunday: Closed
        </div>

        {/* Floating Buttons */}
        <FloatingButtons phoneNumber={phoneNumber} whatsappNumber={whatsappNumber} setShowModal={setShowModal} setShowSuccess={setShowSuccess}/>

        {/* Hero */}
        <Hero phoneNumber={phoneNumber} setIsSubmitted={setIsSubmitted} setShowModal={setShowModal} setShowSuccess={setShowSuccess} />

        {/* Stats */}
        <Stats />

        {/* Appointment Modal */}
        {showModal && (
          <Appointment isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted} setShowModal={setShowModal}/>

        )}

        {/* Services */}
        <Services />

        {/* About */}
        <About />

        {/* Why Choose Our Dental Clinic */}
        <WhyChooseUs />

        {/* Testimonials */}
        <ReviewsSection />

        {/* Gallery */}
        <GallerySlider />

        {/* FAQ's */}
        <FAQ />

        {/* Address & Contact */}
        <Location setIsSubmitted={setIsSubmitted} setShowModal={setShowModal} setShowSuccess={setShowSuccess} />
        {/* Google Map */}
        <Map />

        {/* Success Popup */}
        {showSuccess && (
            <Thankyou setShowSuccess={setShowSuccess} setFormData={setFormData} today={today} setIsSubmitted={setIsSubmitted} />
        )}

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default App;
