import { useState } from "react";
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
    gal9, gal10, gal12, gal13, gal14,
    gal1, gal2, gal3, gal4, gal5,
    gal6, gal7, gal8,
  ];

  const [index, setIndex] = useState(0);

  const visibleImages = images.slice(index, index + 3);

  const prev = () => {

    setIndex((prevIndex) =>
      prevIndex === 0
        ? images.length - 3
        : prevIndex - 1
    );
  };

  const next = () => {

    setIndex((prevIndex) =>
      prevIndex >= images.length - 3
        ? 0
        : prevIndex + 1
    );
  };

  return (

    <section
      id="gallery"
      className="
        py-24
        px-6
        md:px-16
        bg-gradient-to-br
        from-white
        via-[#F8F7FF]
        to-[#EEFDF5]
      "
    >

      {/* Heading */}
      <div className="text-center mb-14">

        <p className="
          uppercase
          tracking-[4px]
          text-sm
          text-[#2ECC71]
          font-semibold
          mb-3
        ">
          Our Clinic
        </p>

        <h2 className="
          text-4xl
          md:text-5xl
          font-bold
          text-[#5A4FCF]
          mb-5
        ">
          Gallery
        </h2>

      </div>

      {/* Slider */}
      <div className="relative max-w-7xl mx-auto">

        {/* Left Button */}
        <button
          onClick={prev}

          className="
            absolute
            left-[-20px]
            top-1/2
            -translate-y-1/2
            z-20

            bg-white/90
            backdrop-blur-xl

            border
            border-white/40

            shadow-xl

            p-3
            rounded-full

            hover:scale-110
            transition
          "
        >
          ◀
        </button>

        {/* Right Button */}
        <button
          onClick={next}

          className="
            absolute
            right-[-20px]
            top-1/2
            -translate-y-1/2
            z-20

            bg-white/90
            backdrop-blur-xl

            border
            border-white/40

            shadow-xl

            p-3
            rounded-full

            hover:scale-110
            transition
          "
        >
          ▶
        </button>

        {/* Images */}
        <div className="overflow-hidden">

          {/* <AnimatePresence mode="wait"> */}

            <motion.div

              key={index}

              initial={{ opacity: 1, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 1, x: -80 }}

              transition={{
                duration: 0.5
              }}

              className="
                grid
                grid-cols-1
                md:grid-cols-3
                gap-8
              "
            >

              {visibleImages.map((img, i) => (

                <div
                  key={i}

                  className="
                    overflow-hidden
                    rounded-[32px]

                    bg-white/40
                    backdrop-blur-xl

                    shadow-[0_10px_40px_rgba(90,79,207,0.10)]
                  "
                >

                  <img
                    src={img}
                    alt={`Gallery ${i}`}

                    className="
                      w-full
                      h-[220px]
                      object-cover
                    "
                  />

                </div>

              ))}

            </motion.div>

          {/* </AnimatePresence> */}

        </div>

      </div>

    </section>
  );
}
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// import gal1 from "../assets/gallery/gallery1.jpeg";
// import gal2 from "../assets/gallery/gallery2.jpeg";
// import gal3 from "../assets/gallery/gallery3.jpeg";
// import gal4 from "../assets/gallery/gallery4.jpeg";
// import gal5 from "../assets/gallery/gallery5.jpeg";
// import gal6 from "../assets/gallery/gallery6.jpeg";
// import gal7 from "../assets/gallery/gallery7.jpeg";
// import gal8 from "../assets/gallery/gallery8.jpeg";
// import gal9 from "../assets/gallery/DSC01767.webp";
// import gal10 from "../assets/gallery/DSC01765.webp";
// import gal12 from "../assets/gallery/DSC01771.webp";
// import gal13 from "../assets/gallery/DSC01759.webp";
// import gal14 from "../assets/gallery/DSC01763.webp";

// export default function GallerySlider() {
   
//     const images = [
//         gal9, gal10, gal12, gal13, gal14, gal1, gal2, gal3, gal4, gal5,
//         gal6, gal7, gal8,
//     ];

//     const [index, setIndex] = useState(0);
//     const [isPaused, setIsPaused] = useState(false);

//     const prev = () => {
//         if (index > 0) setIndex(index - 1);
//     };

//     const next = () => {
//         if (index < images.length - 3) setIndex(index + 1);
//     };

//     // Auto slide every 3 seconds
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setIndex((prev) => (prev < images.length - 3 ? prev + 1 : 0));
//         }, 3000);

//         return () => clearInterval(interval);
//     }, [images.length]);

//     return (
//         <>
//             <section id="gallery" className="px-6 md:px-16 py-16 text-center">
//                 <h2 className="text-3xl font-semibold mb-10">Gallery</h2>

//                 <div className="relative max-w-5xl mx-auto overflow-hidden">
//                     <motion.div
//                     animate={{
//                             x: isPaused ? undefined : ["0%", "-50%"]
//                         }}
//                         transition={{
//                             repeat: Infinity,
//                             duration: 40,
//                             ease: "linear"
//                         }}

//                         onMouseEnter={() => setIsPaused(true)}
//                         onMouseLeave={() => setIsPaused(false)}
//                         className="flex gap-4"
//                     >
//                         {images.map((img, i) => (
//                             <img
//                                 key={i}
//                                 src={img}
//                                 className="w-full h-[220px] object-cover
//       transition-transform duration-500 hover:scale-105"
//                                 alt={`Gallery${i}`}
//                             />
//                         ))}
//                     </motion.div>

//                     {/* Controls */}
//                     <button
//                         onClick={prev}
//                         className="absolute z-10 left-0 top-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded shadow"
//                     >
//                         ◀
//                     </button>

//                     <button
//                         onClick={next}
//                         className="absolute z-10 right-0 top-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded shadow"
//                     >
//                         ▶
//                     </button>
//                 </div>
//             </section >
//         </>
//     );
// }
