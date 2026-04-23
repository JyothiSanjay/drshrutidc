import './App.css';
import logo from "./assets/logo.png";
import "./index.css";
import "./tailwind.output.css";

import { useEffect, useState } from 'react';
import About from './components/About';
import Footer from './components/Footer';
import GallerySlider from './components/GallerySlider';
import Testimonials from './Testimonials';
import Services from './components/Services';
import Location from './components/Location';
import Hero from './components/Hero';
import Header from './components/Header';
import FloatingButtons from './components/FloatingButtons';

function App() {
  const phoneNumber = "+917400239212";
  const whatsappNumber = "917400239212";
  const [showModal, setShowModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [active, setActive] = useState("home");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const today = new Date().toISOString().split('T')[0];
  const time = new Date().toLocaleTimeString();
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 2);
  const maxDateStr = maxDate.toISOString().split("T")[0];
  const [formData, setFormData] = useState({ Name: '', Phone: '', App_Date: '', Message: '' });

  const handleSubmit = (e) => {
    console.log(formData);

    e.preventDefault();
    setIsSubmitted(true);

    const url = "https://script.google.com/macros/s/AKfycbyWQGY081csVQwsZX1wnnhYKzzfXHeQojWNXxA3eLG_hOK4XN1CoJ68LlvA5nEqkzC67g/exec"
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
    <div  id="home" className="font-sans bg-[#F9FAFB] text-[#2C2C2C]">
      {/* Header */}
      <Header logo={logo} active={active} setActive={setActive} />

      {/* Top Banner */}
      <div className="bg-[#2ECC71] text-white text-center py-2 text-sm">
        Mon - Fri: 10:00 AM – 7:00 PM | Saturday: 10:00 AM – 5:00 PM | Sunday: Closed
      </div>

      {/* Floating Buttons */}
      <FloatingButtons phoneNumber={phoneNumber} whatsappNumber={whatsappNumber}/>

      {/* Hero */}
      <Hero phoneNumber={phoneNumber} setIsSubmitted={setIsSubmitted} setShowModal={setShowModal} setShowSuccess={setShowSuccess} />

      {/* Appointment Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
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
                <input name="App_Date" type="date" className="border p-2 rounded" required min={today} max={maxDateStr} onChange={(e) => setFormData({ ...formData, App_Date: e.target.value })} value={today} />
                {/* <input name="App_Time" type="time" className="border p-2 rounded" required min={today} max={maxDateStr} onChange={(e) => setFormData({ ...formData, App_Time: e.target.value })} /> */}
                <textarea name="Message" placeholder="Message" className="border p-2 rounded" onChange={(e) => setFormData({ ...formData, Message: e.target.value })} ></textarea >
                <button
                  disabled={isSubmitted}
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

      {/* Testimonials */}
      <Testimonials />

      {/* Gallery */}
      <GallerySlider />


      {/* Contact */}
      <Location />


      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg text-center w-[90%] md:w-[350px]">
            <h2 className="text-xl font-semibold text-[#5A4FCF] mb-3">Appointment Confirmed </h2>
            <p className="text-gray-600 mb-4">
              Thank you! Your appointment request has been received. We will contact you shortly.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="bg-[#2ECC71] text-white px-4 py-2 rounded"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
