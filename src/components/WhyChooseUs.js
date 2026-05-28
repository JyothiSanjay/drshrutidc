import React from 'react'
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function WhyChooseUs() {
  return (
    <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="px-6 md:px-16 pb-20"
        >
          <div className="max-w-7xl mx-auto text-center">
            <p className="uppercase tracking-[4px] text-sm text-[#2ECC71] font-semibold mb-3 mt-3">
              Why Choose Us
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#5A4FCF] mb-6">
              Why Choose Our Dental Clinic in Malad East?
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-14">
              We combine advanced dental technology, experienced specialists, and compassionate patient care to create a comfortable and trusted dental experience for every patient.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:-translate-y-2 transition duration-300">
                {/* <div className="text-4xl mb-5">🦷</div> */}
                <h3 className="text-2xl font-semibold text-[#5A4FCF] mb-4">
                  Expert Care
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Led by Dr. Shruthi, our team brings years of expertise in restorative, cosmetic and preventive dentistry.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:-translate-y-2 transition duration-300">
                {/* <div className="text-4xl mb-5">📍</div> */}
                <h3 className="text-2xl font-semibold text-[#5A4FCF] mb-4">
                  Convenient Location
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Conveniently located in Raheja Complex, Malad East for easy accessibility and stress-free visits.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:-translate-y-2 transition duration-300">
                {/* <div className="text-4xl mb-5">💎</div> */}
                <h3 className="text-2xl font-semibold text-[#5A4FCF] mb-4">
                  Advanced Technology
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Equipped with digital diagnostics, Class B Autoclave sterilisation and advanced treatment equipments.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:-translate-y-2 transition duration-300">
                {/* <div className="text-4xl mb-5">🤝</div> */}
                <h3 className="text-2xl font-semibold text-[#5A4FCF] mb-4">
                  Patient-Centric Approach
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Every treatment plan is personalised to your comfort, needs, and long-term oral health goals.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:-translate-y-2 transition duration-300 lg:col-span-2">
                {/* <div className="text-4xl mb-5">👨‍⚕️</div> */}
                <h3 className="text-2xl font-semibold text-[#5A4FCF] mb-4">
                  Specialist Doctor Empanelment
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  Our clinic has a panel of visiting MDS specialists for advanced treatments including gum surgery, complex root canals, orthodontics and paediatric dentistry.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
  )
}
