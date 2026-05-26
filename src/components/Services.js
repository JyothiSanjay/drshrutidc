// import cleaning from "../assets/cleaning.webp";
import cleaning from "../assets/preventive.png";
import rct from "../assets/rct.png";
// import rct from "../assets/rootcanal.jpeg";
import cosmetic from "../assets/cosmetic.webp";
import implants from "../assets/implants.png";
import kids from "../assets/kids1.png";
import braces from "../assets/ortho.jpg";
// import braces from "../assets/braces.jpeg";
// import kids from "../assets/kids.jpg";
// import kids from "../assets/pediatric.jpeg";

export default function Services() {
    return (
        <section id="services" className="px-6 md:px-16 py-20 from-[#F3F2FF] to-white">
            <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-semibold text-[#2C2C2C]">
                    Our Dental Services
                </h2>
                <p className="text-gray-500 mt-3">
                    As a comprehensive dental clinic in Malad East, we offer a wide array of services to keep your teeth healthy and bright:
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Service Card */}
                {[
                    {
                        title: "Preventive Care",
                        desc: "Routine cleanings, polishing, and oral cancer screenings.",
                        img: cleaning
                    },
                    {
                        title: "Restorative",
                        desc: "Root canal treatments (RCT), tooth-colored fillings, and crowns.",
                        img: rct
                    },
                    {
                        title: "Cosmetic Dentistry",
                        desc: "Enhance your smile with whitening, veneers, and smile design.",
                        img: cosmetic
                    },
                    {
                        title: "Prosthetic Dentistry",
                        desc: "We provide premium dental implants in Malad East, offering durable, natural-looking prosthetic teeth to restore your smile and confidence.",
                        img: implants
                    },
                    {
                        title: "Orthodontics",
                        desc: "Traditional braces and clear aligners for a straighter smile.",
                        img: braces
                    },
                    {
                        title: "Kids Dentistry",
                        desc: "Specialized, gentle dental care for your little ones",
                        img: kids
                    }
                ].map((service, index) => (
                    <div
                         className="w-full max-w-sm h-80 rounded-lg shadow-md bg-cover bg-center flex flex-col justify-end p-6 hover:shadow-xl hover:-translate-y-2 transition duration-300"
                      
                        style={{ backgroundImage: `url(${service.img}` }}
                        key={index}
                    >
                        <div className="bg-white/40 backdrop-blur-sm p-4 rounded-lg">
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
