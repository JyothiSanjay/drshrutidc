import cleaning from "../assets/cleaning.webp";
import rct from "../assets/rct.jpeg";
import cosmetic from "../assets/cosmetic.webp";
import implants from "../assets/implants.png";
import braces from "../assets/braces.jpeg";
import kids from "../assets/kids.jpg";

export default function Services() {
    return (
        <section id="services" className="px-6 md:px-16 py-20 from-[#F3F2FF] to-white">
            <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-semibold text-[#2C2C2C]">
                    Our Dental Services
                </h2>
                <p className="text-gray-500 mt-3">
                    Comprehensive care for your complete dental health
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Service Card */}
                {[
                    {
                        title: "Teeth Cleaning",
                        desc: "Professional cleaning to maintain oral hygiene and prevent gum disease.",
                        img: cleaning
                    },
                    {
                        title: "Root Canal Treatment",
                        desc: "Pain-free root canal procedures using advanced technology.",
                        img: rct
                    },
                    {
                        title: "Cosmetic Dentistry",
                        desc: "Enhance your smile with whitening, veneers, and smile design.",
                        img: cosmetic
                    },
                    {
                        title: "Dental Implants",
                        desc: "Permanent solution for missing teeth with natural appearance.",
                        img: implants
                    },
                    {
                        title: "Braces & Aligners",
                        desc: "Straighten teeth with modern orthodontic treatments.",
                        img: braces
                    },
                    {
                        title: "Kids Dentistry",
                        desc: "Gentle and friendly dental care for children.",
                        img: kids
                    }
                ].map((service, index) => (
                    <div
                         className="w-full max-w-sm h-80 rounded-lg shadow-md bg-cover bg-center flex flex-col justify-end p-6 shadow hover:shadow-xl hover:-translate-y-2 transition duration-300"
                      
                        style={{ backgroundImage: `url(${service.img}` }}
                        key={index}
                    >
                        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg">
                            <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                            <p className="text-sm text-gray-700">{service.desc}</p>
                        </div>
                    </div>

                ))}
                {/* style={{ backgroundImage: `url(${require(`${service.img}`)})` }}  */}
{/* `url(${require(`${service.img}`)})` */}
            </div>

        </section>
    )
}
