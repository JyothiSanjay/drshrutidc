import { useEffect, useState } from "react";
import gal1 from "../assets/gallery/gallery1.jpeg";
import gal2 from "../assets/gallery/gallery2.jpeg";
import gal3 from "../assets/gallery/gallery3.jpeg";
import gal4 from "../assets/gallery/gallery4.jpeg";
import gal5 from "../assets/gallery/gallery5.jpeg";
import gal6 from "../assets/gallery/gallery6.jpeg";
import gal7 from "../assets/gallery/gallery7.jpeg";
import gal8 from "../assets/gallery/gallery8.jpeg";
// import gal2 from "../assets/gal2.webp";
// import gal3 from "../assets/gal3.webp";
// import gal4 from "../assets/gal4.webp";
// import gal5 from "../assets/gal5.webp";

export default function GallerySlider() {
    //   const images = [
    //     gal1,
    //     gal2,
    //     gal3,
    //     gal4,
    //     gal5,
    //   ];

    //   const [index, setIndex] = useState(0);

    //   const prev = () => {
    //     setIndex((index - 1 + images.length) % images.length);
    //   };

    //   const next = () => {
    //     setIndex((index + 1) % images.length);
    //   };

    //   return (
    //     <section className="px-6 md:px-16 py-16 text-center">
    //       <h2 className="text-3xl font-semibold mb-10">Gallery</h2>

    //       <div className="relative max-w-3xl mx-auto">
    //         <img
    //           src={images[index]}
    //           className="w-full rounded-xl shadow-md md:size-[400px] transition duration-500"
    //         />

    //         {/* Buttons */}
    //         <button
    //           onClick={prev}
    //           className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white px-3 py-1 rounded shadow"
    //         >
    //           ◀
    //         </button>

    //         <button
    //           onClick={next}
    //           className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white px-3 py-1 rounded shadow"
    //         >
    //           ▶
    //         </button>
    //       </div>
    //     </section>
    //   );
    // }


    // 3 Image Slider Component
    const images = [
        gal1,
        gal2,
        gal3,
        gal4,
        gal5,
        gal6,
        gal7,
        gal8,
    ];

    const [index, setIndex] = useState(0);

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
            <section  id="gallery"  className="px-6 md:px-16 py-16 text-center">
                <h2 className="text-3xl font-semibold mb-10">Gallery</h2>

                <div className="relative max-w-5xl mx-auto overflow-hidden">
                    <div
                        className="flex gap-4 transition-transform duration-500"
                        style={{ transform: `translateX(-${index * 33.33}%)` }}
                    >
                        {images.map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                className="w-1/3 rounded-xl shadow-md flex-shrink-0"
                                alt={`Gallery${i}`}
                            />
                        ))}
                    </div>

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
