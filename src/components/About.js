import profilePic from "../assets/SHRUTHI.jpg";
import { motion } from "framer-motion";

export default function About() {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };
    return (
        <motion.section
            id="about"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="px-6 md:px-16 py-20 bg-white"
        >
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

                {/* Image Side */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative md:order-2 order-1"
                >
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#5A4FCF] to-[#2ECC71] rounded-[32px] blur-2xl opacity-20"></div>

                    <img
                        src={profilePic}
                        alt="Dental Clinic"
                        className="relative rounded-[28px] shadow-2xl object-cover w-2/3 mx-auto border-4 border-white"
                    />
                </motion.div>

                {/* Content Side */}
                <motion.div variants={fadeUp} className="md:order-1 order-2">
                    <p className="uppercase tracking-[4px] text-sm text-[#2ECC71] font-semibold mb-3">
                        About Our Clinic
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#5A4FCF]">
                        About Dr. Shruthi’s Dental Clinic
                    </h2>

                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                        Dr. Shruthi’s Dental Clinic combines clinical excellence with a compassionate touch. Located in the heart of the Raheja Complex, we have established ourselves as a premier dental clinic in Malad East, dedicated to providing world-class oral healthcare to our local community.
                    </p>

                    <p className="text-gray-600 leading-relaxed mb-6">
                        With a legacy spanning over 20 years of experience, we have earned the reputation of being the go-to dentist in Malad East for families seeking precision, trust, and a gentle touch.
                    </p>

                    <p className="text-gray-600 leading-relaxed mb-8">
                        At our clinic, we believe that a healthy smile is the foundation of overall well-being. Whether you are looking for a routine check-up or a complete smile makeover, our facility is equipped with modern technology to ensure your treatment is precise, painless, and effective.
                    </p>

                    {/* Why Choose Us */}
                    {/* <div className="bg-[#F9FAFB] rounded-2xl p-6 shadow-sm border border-gray-100">
                        <h3 className="text-2xl font-semibold text-[#5A4FCF] mb-5">
                            Why Choose Our Dental Clinic in Malad East?
                        </h3>

                        <div className="space-y-5 text-gray-600 leading-relaxed">
                            <div>
                                <span className="font-semibold text-[#2C2C2C]">Expert Care:</span> Led by Dr. Shruthi, our team brings years of experience in restorative, cosmetic, and preventive dentistry.
                            </div>

                            <div>
                                <span className="font-semibold text-[#2C2C2C]">Convenient Location:</span> Situated in Raheja Complex, Malad East, we are easily accessible for residents looking for quality dental care close to home.
                            </div>

                            <div>
                                <span className="font-semibold text-[#2C2C2C]">Advanced Technology:</span> We utilise the latest diagnostic tools to provide accurate treatments, from digital X-rays to advanced Class B Vacuum sterilisation, well-equipped clinical instruments and tools.
                            </div>

                            <div>
                                <span className="font-semibold text-[#2C2C2C]">Patient-Centric Approach:</span> Every treatment plan is customised to meet your specific needs and budget.
                            </div>

                            <div>
                                <span className="font-semibold text-[#2C2C2C]">Specialist Doctor Empanelment:</span> We have a panel of visiting specialist dentists holding Master’s degrees (MDS) in various fields for advanced treatments including gum surgery, complex root canals, and paediatric dentistry.
                            </div>
                        </div>
                    </div> */}
                </motion.div>
            </div>
        </motion.section>
    )
}

// <section id="about" data-aos="fade-right" className="px-6 md:px-16 py-16 bg-white">
//     <div className="flex flex-col md:flex-row items-center gap-10"
//         style={{ backgroundImage: "url($require(`${profilePic}`))", backgroundSize: "cover", backgroundPosition: "center" }}>


//         <div>
//             <h2 className="text-3xl font-semibold text-[#5A4FCF] mb-4">
//                 About Dr. Shruthi’s Dental Clinic: Your Trusted Dentist in Malad East
//             </h2>
//             <p className="text-gray-600 leading-relaxed">
//                 Dr. Shruthi’s Dental Clinic, combines clinical excellence with a compassionate touch. Located in the heart of the Raheja Complex, we have established ourselves as a premier dental clinic in Malad East, dedicated to providing world-class oral healthcare to our local community. With a legacy spanning over 20 years of experience, we have earned the reputation of being the go-to dentist in Malad East for families seeking precision, trust, and a gentle touch.
//             </p>
//             <p className="text-gray-600 mt-4 leading-relaxed">
//                 At our clinic, we believe that a healthy smile is the foundation of overall well-being. Whether you are looking for a routine check-up or a complete smile makeover, our facility is equipped with modern technology to ensure your treatment is precise, painless, and effective.
//             </p>
//             <p className="text-gray-600 mt-4 leading-relaxed">
//                 Why Choose Our Dental Clinic in Malad East?
//                 <div className="text">Finding a reliable dentist in Malad East shouldn't be a challenge. We pride ourselves on creating a stress-free environment for patients of all ages. Here’s what sets us apart:</div>
//                 <ul className="list-disc list-inside mt-2">
//                     <li>
//                         <strong>Expert Care: </strong>Led by Dr. Shruthi, our team brings years of experience in restorative, cosmetic, and preventive dentistry.
//                     </li>
//                     <li>
//                         <strong>Convenient Location: </strong>Situated in <strong>Raheja Complex, Malad East, </strong>we are easily accessible for residents looking for quality dental care close to home.
//                     </li>
//                     <li><strong>Advanced Technology:</strong> We utilise the latest diagnostic tools to provide accurate treatments, from digital X-rays to advanced Class B Vacuum sterilisation, well-equipped clinical instruments and tools</li>
//                     <li>
//                         <strong>Patient-Centric Approach:</strong> We listen. Every treatment plan is customised to meet your specific needs and budget.
//                     </li>
//                     <li>
//                         <strong>Specialist Doctor Empanelment:</strong>
//                         We understand that complex dental issues require more than just general care. At Dr. Shruthi’s Dental Clinic, we don’t take shortcuts when it comes to your health. We have a panel of visiting specialist dentists who hold Master’s degrees (MDS) in various fields. Whether it is intricate gum surgery, complex root canal treatments, or paediatric care, your treatment is handled by experts who have dedicated years to mastering their specific specialities.

//                     </li>
//                 </ul>
//             </p>
//         </div>
//         <img
//             src={profilePic}
//             alt="Doctor"
//             className="flex md:w-[350px] rounded-xl shadow-md w-48 h-auto "
//         />
//     </div>
// </section>
// <section id="about" className="px-6 md:px-16 py-16 bg-white text-center">
//     <h2 className="text-3xl font-semibold mb-6">About Dr. Shruthi Madhu</h2>
//     <p className="max-w-2xl mx-auto text-gray-600">
//         Dr. Shruthi Madhu provides high-quality dental care using advanced
//         technology and a gentle approach, ensuring patient comfort and trust.
//     </p>
// </section>


