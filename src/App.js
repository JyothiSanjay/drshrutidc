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


function App() {
  const phoneNumber = "+917400239212";
  const whatsappNumber = "917400239212";
  const [showModal, setShowModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [active, setActive] = useState("home");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const today = new Date().toISOString().split('T')[0];
  const time = new Date().toLocaleTimeString();
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 2);
  const maxDateStr = maxDate.toISOString().split("T")[0];
  const [todayDate, setTodayDate] = useState(today);
  const [formData, setFormData] = useState({ Name: '', Phone: '', App_Date: todayDate, Book_Date: today, Message: '' });

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  function validateForm(params) {
    if (!formData.Name.trim() || !formData.Phone.trim() || !formData.App_Date.trim() || !formData.Message.trim()) {
      alert("Please fill in all required fields.");
      setIsValid(false);
      return;
    }
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.Phone)) {
      alert("Please enter a valid 10-digit phone number.");
      setIsValid(false);
      return;
    }

  }
  const handleSubmit = (e) => {
    // console.log(formData);

    e.preventDefault();
    setIsSubmitted(true);
    validateForm(e);
    const url = "https://script.google.com/macros/s/AKfycbw7TgPKeeMAdp5JXbRa5f7vsvYa5F1gTv8y8AMxdzNVeVCB8Gx-srguLym7VMrA9wCjwg/exec"
    fetch(url, {
      method: "POST",
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    }).then((res) => res.text())
      .then((data) => {
        setShowModal(false);
        setShowSuccess(true);
      }).catch((err) => {
        console.error(err);
        alert("There was an error submitting your request. Please try again.");
      });
  }

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
        <FloatingButtons phoneNumber={phoneNumber} whatsappNumber={whatsappNumber} />

        {/* Hero */}
        <Hero phoneNumber={phoneNumber} setIsSubmitted={setIsSubmitted} setShowModal={setShowModal} setShowSuccess={setShowSuccess} />

        {/* Stats */}
        <Stats />

        {/* Appointment Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
            <div className="relative bg-white p-6 rounded-lg w-[90%] md:w-[400px]">
              <div
                onClick={() => setShowModal(false)}
                className="absolute top-2 cursor-pointer right-2 p-2 text-gray-500 hover:text-gray-700"
              >X
              </div>
              <h2 className="text-xl font-semibold  mb-4">Book Appointment</h2>
              <div className='flex flex-col gap-3'>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <input name="Name" type="text" placeholder="Name" className="border p-2 rounded" required onChange={(e) => setFormData({ ...formData, Name: e.target.value })} />
                  <input name="Phone" type="tel" placeholder="Phone" className="border p-2 rounded" required onChange={(e) => setFormData({ ...formData, Phone: e.target.value })} />
                  <input name="App_Date" type="date" readOnly className="border p-2 rounded" required min={today} max={maxDateStr} onChange={(e) => { setTodayDate(e.target.value); setFormData({ ...formData, App_Date: e.target.value }) }} value={todayDate} />
                  <input name="Book_Date" type="hidden" value={today} />
                  <textarea name="Message" placeholder="Message" required className="border p-2 rounded" onChange={(e) => setFormData({ ...formData, Message: e.target.value })} ></textarea >
                  <button
                    disabled={isSubmitted || !isValid}
                    className="bg-[#5A4FCF] text-white w-full py-2 rounded"
                    style={{ backgroundColor: isSubmitted ? "bg-[#8885ac]" : "bg-[#5A4FCF]", cursor: isSubmitted ? "not-allowed" : "pointer" }}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Services */}
        <Services />

        {/* About */}
        <About />

        {/* Why Choose Our Dental Clinic */}
        <WhyChooseUs />

        {/* Testimonials */}
        {/* <Testimonials /> */}
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
