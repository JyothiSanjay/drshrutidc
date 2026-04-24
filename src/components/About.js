import profilePic from "../assets/shruthi_madhu.jpeg";
export default function About() {
    return (
        <section id="about" className="px-6 md:px-16 py-16 bg-white">
        <div className="flex flex-col md:flex-row items-center gap-10" 
        style={{backgroundImage: "url($require(`${profilePic}`))", backgroundSize: "cover", backgroundPosition: "center"}}>
          

          <div>
            <h2 className="text-3xl font-semibold text-[#5A4FCF] mb-4">
              About Dr. Shruthi Madhu
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Dr. Shruthi Madhu is a highly experienced dental professional
              dedicated to providing gentle, patient-focused care. With
              expertise in modern dental procedures including root canal
              treatments, cosmetic dentistry, and preventive care, she ensures
              every patient receives personalized attention in a comfortable
              environment.
            </p>
            <p className="text-gray-600 mt-4 leading-relaxed">
              The clinic is equipped with advanced technology to deliver
              painless and efficient treatments, making your dental experience
              stress-free and effective.
            </p>
          </div>
          <img
            src={profilePic}
            alt="Doctor"
            className="flex md:w-[350px] rounded-xl shadow-md w-48 h-auto "
          />
        </div>
      </section>
        // <section id="about" className="px-6 md:px-16 py-16 bg-white text-center">
        //     <h2 className="text-3xl font-semibold mb-6">About Dr. Shruthi Madhu</h2>
        //     <p className="max-w-2xl mx-auto text-gray-600">
        //         Dr. Shruthi Madhu provides high-quality dental care using advanced
        //         technology and a gentle approach, ensuring patient comfort and trust.
        //     </p>
        // </section>
    )
}
