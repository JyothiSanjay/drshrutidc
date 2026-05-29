import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { reviews } from "../resources/reviews";
export default function ReviewsSection() {

    const [expanded, setExpanded] = useState(null);
    const [isPaused, setIsPaused] = useState(false);

    return (

        <section id="testimonial" className="py-24 bg-gradient-to-br from-[#F4F1FF] via-white to-[#EEFDF5] overflow-hidden">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">

                    <p className="uppercase tracking-[4px] text-sm text-[#2ECC71] font-semibold mb-3">
                        Google Reviews
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-[#5A4FCF] mb-6">
                        What Our Patients Say
                    </h2>

                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Trusted by families across Malad East for compassionate and modern dental care.
                    </p>

                </div>

                {/* Auto Scrolling Container */}
                <div className="relative overflow-hidden  mt-5 mb-5">

                    <motion.div
                        animate={{
                            x: isPaused ? undefined : ["0%", "-50%"]
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 80,
                            ease: "linear"
                        }}

                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => { setIsPaused(false); setExpanded(false) }}

                        className="flex gap-8 w-max mb-2 mt-2"
                    >

                        {[...reviews, ...reviews].map((review, index) => {

                            const isExpanded = expanded === index;

                            return (

                                <motion.div
                                    key={index}
                                    whileHover={{ y: -8 }}
                                    className="
                    min-w-[340px]
                    max-w-[340px]
                    backdrop-blur-2xl
                    bg-white/40
                    border border-white/30
                    rounded-[32px]
                    p-8
                    shadow-[0_10px_40px_rgba(90,79,207,0.10)]
                    relative
                    overflow-hidden
                  "
                                >

                                    {/* Glow */}
                                    <div className="
                    absolute
                    -top-10
                    -right-10
                    w-32
                    h-32
                    bg-[#5A4FCF]/20
                    rounded-full
                    blur-3xl
                  "></div>

                                    {/* Stars */}
                                    <div className="text-yellow-400 text-xl mb-5 relative z-10">
                                        ⭐⭐⭐⭐⭐
                                    </div>

                                    {/* Review Text */}
                                    <div className="relative z-10">

                                        <p
                                            className={`
                        text-gray-700
                        leading-relaxed
                        transition-all
                        duration-300
                        ${isExpanded ? "" : "line-clamp-4"}
                      `}
                                        >
                                            “{review.review}”
                                        </p>

                                        <button
                                            onClick={() =>
                                                setExpanded(isExpanded ? null : index)
                                            }
                                            className="
                        mt-4
                        text-[#5A4FCF]
                        font-medium
                        hover:text-[#2ECC71]
                        transition
                      "
                                        >
                                            {isExpanded ? "Read Less" : "Read More"}
                                        </button>

                                    </div>

                                    {/* User */}
                                    <div className="flex items-center gap-4 mt-8 relative z-10">

                                        <div className="
                      w-14
                      h-14
                      rounded-full
                      bg-gradient-to-br
                      from-[#5A4FCF]
                      to-[#2ECC71]
                      flex
                      items-center
                      justify-center
                      text-white
                      font-semibold
                      text-lg
                    ">
                                            {review.name.charAt(0)}
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-[#2C2C2C] text-lg">
                                                {review.name}
                                            </h4>

                                            <p className="text-sm text-gray-500">
                                                Verified Patient
                                            </p>
                                        </div>

                                    </div>

                                </motion.div>
                            );
                        })}

                    </motion.div>

                </div>

            </div>

        </section>
    );
}