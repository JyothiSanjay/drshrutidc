import { motion } from "framer-motion";
import back from '../assets/logo.png';

export default function Location({setShowModal, setIsSubmitted, setShowSuccess}) {
  return (
    <section
      id="contact"
      className="px-6 md:px-16 py-16 from-[#F3F2FF] to-white text-center"
    >
      {/* <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="px-6 md:px-16 py-20 bg-[#F4F5FF]"
      > */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_auto_1fr] gap-10 items-start">

        {/* Left Section */}
        <div className="pr-0 md:pr-10 md:border-r border-gray-300 p-10">
          <h3 className="text-2xl font-semibold text-[#5A4FCF] mb-5">
            Dr. Shruthi’s Dental Clinic
          </h3>

          <p className="text-gray-600 leading-relaxed mb-6">
            📍Building No1B, Shop No 5,<br /> Satyam, Raheja Complex Road,<br /> off TIMES OF INDIA PRESS, <br />Dudhsagar Society, Raheja Estate,<br /> Malad East, <br />Mumbai, Maharashtra 400097
          </p>

          <div className="space-y-4 text-gray-600">
            <p>📞 +91 98765 43210</p>
            <p>✉️ drshruthidentalclinic@gmail.com</p>
            <p className="leading-relaxed">
              🕒 Mon - Sat <br /> Morning: 10:00 AM – 1:00 PM <br /> Evening: 06:00 PM – 9:00 PM <br /> Sunday: Closed
            </p>
            <br />
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-[#5A4FCF] to-transparent h-full min-h-[260px]"></div>

        {/* Right Section */}
        <div className="flex flex-col items-center text-center">
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-3 bg-gradient-to-r from-[#5A4FCF] to-[#2ECC71] rounded-[28px] blur-2xl opacity-20"></div>

            {/* <img
                src="https://images.unsplash.com/photo-1588776814546-ec7e5c9c9f84"
                alt="Dental Appointment"
                className="relative rounded-[24px] shadow-2xl object-cover w-full h-[320px]"
              /> */}
            <p className="md:text-xl leading-relaxed text-gray-600 font-light max-w-2xl mx-auto mt-10">
             Book your appointment today and experience the best dental care in Malad East. Your journey to a healthier, brighter smile starts here!
            </p>
            <img src={back} alt="Dental Clinic" className="relative m-auto w-1/3 h-[180px] mt-6" />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            // className="mt-8 inline-flex items-center justify-center bg-gradient-to-r from-[#5A4FCF] to-[#2ECC71] text-white px-8 py-4 rounded-2xl shadow-xl font-semibold text-lg"
            className="mt-16 inline-flex items-center justify-center  bg-[#2ECC71] text-white px-7 py-3 rounded-xl shadow-lg font-medium   text-lg"
              onClick={() => setShowModal(true)}
          >
            Book an Appointment
          </motion.button>
        </div>
      </div>
      {/* </motion.section> */}
     
    </section>
  )
}
