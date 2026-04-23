import heroImage from "../assets/gal2.webp";

export default function Hero({ phoneNumber, setShowModal, setIsSubmitted, setShowSuccess }) {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-[#F3F2FF] to-white px-6 md:px-16 py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">

                {/* LEFT CONTENT */}
                <div>
                    <p className="text-sm text-[#2ECC71] font-medium mb-3">
                        Trusted Dental Care in Your City
                    </p>

                    <h1 className="text-4xl md:text-5xl font-bold text-[#2C2C2C] leading-tight mb-6">
                        Confident Smiles <br />
                        Start With Expert Care
                    </h1>

                    <p className="text-gray-600 mb-8 text-lg">
                        Experience gentle, advanced dental treatments with a focus on comfort,
                        hygiene, and long-lasting results.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button
                            onClick={() => { setShowModal(true); setIsSubmitted(false); setShowSuccess(false) }}
                            className="bg-[#5A4FCF] text-white px-8 py-3 rounded-lg shadow-lg hover:opacity-90 transition"
                        >
                            Book Appointment
                        </button>

                        <a
                            href={`tel:${phoneNumber}`}
                            className="border border-[#5A4FCF] text-[#5A4FCF] px-8 py-3 rounded-lg hover:bg-[#5A4FCF] hover:text-white transition"
                        >
                            Call Now
                        </a>
                    </div>

                    {/* TRUST BADGES */}
                    <div className="flex gap-6 mt-8 text-sm text-gray-500">
                        <div>✔ 10+ Years Experience</div>
                        <div>✔ 5000+ Happy Patients</div>
                        <div>✔ Modern Equipment</div>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="relative">
                    <img
                        src={heroImage}
                        alt="Dentist"
                        className="rounded-2xl shadow-xl w-full object-cover"
                    />

                    {/* FLOATING CARD */}
                    <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg">
                        <p className="text-sm text-gray-500">Patient Satisfaction</p>
                        <p className="text-xl font-semibold text-[#5A4FCF]">⭐ 4.9 / 5</p>
                    </div>
                </div>
            </div>
        </section>
  )
}
