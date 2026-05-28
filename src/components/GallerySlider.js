import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import gal1 from "../assets/gallery/gallery1.jpeg";
import gal2 from "../assets/gallery/gallery2.jpeg";
import gal3 from "../assets/gallery/gallery3.jpeg";
import gal4 from "../assets/gallery/gallery4.jpeg";
import gal5 from "../assets/gallery/gallery5.jpeg";
import gal6 from "../assets/gallery/gallery6.jpeg";
import gal7 from "../assets/gallery/gallery7.jpeg";
import gal8 from "../assets/gallery/gallery8.jpeg";
import gal9 from "../assets/gallery/DSC01767.webp";
import gal10 from "../assets/gallery/DSC01765.webp";
import gal12 from "../assets/gallery/DSC01771.webp";
import gal13 from "../assets/gallery/DSC01759.webp";
import gal14 from "../assets/gallery/DSC01763.webp";

export default function GallerySlider() {
   
    const images = [
        gal9, gal10, gal12, gal13, gal14, gal1, gal2, gal3, gal4, gal5,
        gal6, gal7, gal8,
    ];

    const [index, setIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const prev = () => {
        if (index > 0) setIndex(index - 1);
    };

    const next = () => {
        if (index < images.length - 3) setIndex(index + 1);
    };

    // Auto slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev < images.length - 3 ? prev + 1 : 0));
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <>
            <section id="gallery" className="px-6 md:px-16 py-16 text-center">
                <h2 className="text-3xl font-semibold mb-10">Gallery</h2>

                <div className="relative max-w-5xl mx-auto overflow-hidden">
                    <motion.div
                    animate={{
                            x: isPaused ? undefined : ["0%", "-50%"]
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 40,
                            ease: "linear"
                        }}

                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        className="flex gap-4"
                    >
                        {images.map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                className="w-full h-[220px] object-cover
      transition-transform duration-500 hover:scale-105"
                                alt={`Gallery${i}`}
                            />
                        ))}
                    </motion.div>

                    {/* Controls */}
                    <button
                        onClick={prev}
                        className="absolute z-10 left-0 top-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded shadow"
                    >
                        ◀
                    </button>

                    <button
                        onClick={next}
                        className="absolute z-10 right-0 top-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded shadow"
                    >
                        ▶
                    </button>
                </div>
            </section >
        </>
    );
}
