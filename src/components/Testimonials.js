import { reviews } from "../resources/reviews.js";

export default function Testimonials() {
  return (
    // <section id="testimonial" className="px-6 md:px-16 py-16 text-center">
    //     <h2 className="text-3xl font-semibold mb-10">Patient Testimonials</h2>
    //     <iframe src="https://widgets.sociablekit.com/google-reviews/iframe/25674961" frameBorder="0" width="100%" height="1000px"></iframe>
    //   </section>
    <section className="py-20 bg-[#F8F7FF]">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-[#5A4FCF] mb-14">
          Patient Reviews
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((item, index) => (

            <div
              key={index}
              className="
            bg-white
            rounded-[28px]
            p-8
            shadow-[0_10px_40px_rgba(90,79,207,0.08)]
            border border-gray-100
          "
            >

              <div className="text-yellow-400 text-2xl mb-4">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                “{item.review}”
              </p>

              <h4 className="font-semibold text-[#5A4FCF]">
                {item.name}
              </h4>

            </div>
          ))}

        </div>
      <div className="text-center  items-center justify-center">
<a
  href="https://www.google.com/search?sca_esv=e6c6a918348d6a72&rlz=1C5CHFA_enIN985IN985&biw=1440&bih=696&sxsrf=ANbL-n6n7wKqxCQ0yNg6AYk-rzahb1I5Iw:1779533786417&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOY5Z5BsYLDBCuq9oelm4Sowjm0jotCE3FIq-JsbGZZW2UimKcwtXIJkPfl7m_3yHB6VCiKeaBV1887Jb4gZ3MWMC0DRofPK73ERNyS09zpQ0W2OhHw%3D%3D&q=Dr.+Shruti%27s+Dental+Clinic+Reviews&sa=X&ved=2ahUKEwjP0NH5n8-UAxXnSmwGHY6NDqMQ0bkNegQIKBAF&cshid=1779533849176892"
  target="_blank"
  className="
    bg-[#2ECC71] text-white px-7 py-3 rounded-xl shadow-lg font-medium
    mt-12
    inline-block
    transition-transform
    hover:scale-105 
  "
>
  Leave a Google Review
</a>
</div>
</div>
    </section>
  )
}
