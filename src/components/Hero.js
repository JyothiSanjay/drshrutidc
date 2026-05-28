import { FaPhoneAlt } from "react-icons/fa";
// import heroImage from "../assets/gal2.webp";
import heroImage from "../assets/hero1.jpg";
import docImage from "../assets/shruthi_madhu.jpeg"
import { motion } from "framer-motion";

export default function Hero({ phoneNumber, setShowModal, setIsSubmitted, setShowSuccess }) {
    // Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};
    return (
        <motion.section
        id="home"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 bg-gradient-to-br from-[#EDEBFF] via-white to-[#F9FAFB]"
      >
        <motion.div variants={fadeUp} className="max-w-2xl">
          <p className="uppercase tracking-[4px] text-sm text-[#2ECC71] font-semibold mb-3">
            Precision Care. Beautiful Smiles.
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-blue-800 via-green-500 to-indigo-400 bg-clip-text text-transparent">
            Meet Your Dentist in Malad East
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            At Dr. Shruthi’s Dental Clinic, we combine modern dentistry with compassionate care to deliver precise, comfortable, and lasting treatments. Our goal is to help every patient achieve lifelong oral health and leave with a smile they feel confident sharing with the world.
          </p>

          <blockquote className="border-l-4 border-[#5A4FCF] pl-5 italic text-gray-700 mb-8 text-lg">
            “Our goal isn't just to fix teeth; it's to restore confidence. We want every patient to leave our clinic with a smile they are proud to share with the world.”<br /> 
            <span className="text-sm">— Dr. Shruthi Madhu, Founder & Lead Dentist</span>
          </blockquote>

          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#2ECC71] text-white px-7 py-3 rounded-xl shadow-lg font-medium"
                onClick={() => setShowModal(true)}
            >
              Book Appointment
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-[#5A4FCF] text-[#5A4FCF] px-7 py-3 rounded-xl font-medium"
            >
              Call Clinic
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="relative mt-12 md:mt-0"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-[#5A4FCF] to-[#2ECC71] rounded-[30px] blur-2xl opacity-20"></div>

          <img
            src={heroImage}
            alt="Dr. Shruthi's's Dental Clinic"
            className="relative w-[380px] md:w-[480px] rounded-[28px] shadow-2xl border-4 border-white object-cover"
          />
        </motion.div>
      </motion.section>
    )
}
