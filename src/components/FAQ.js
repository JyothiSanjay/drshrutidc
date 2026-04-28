
import React from 'react'
import {faqs} from '../resources/resource';

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState(null);

//   const faqs = [
//     {
//       q: "Is root canal treatment painful?",
//       a: "No, modern techniques make it virtually painless."
//     },
//     {
//       q: "How much does teeth cleaning cost?",
//       a: "Costs vary depending on condition. Contact us for details."
//     },
//     {
//       q: "Do I need an appointment?",
//       a: "Appointments are recommended to avoid waiting time."
//     }
//   ];

  return (
    <section className="px-6 md:px-16 py-16 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-10">Frequently Asked Questions</h2>

      <div className="max-w-3xl mx-auto">
        {faqs.
        // map((faq, index) => (
        //   <div key={index} className="border-b py-4">
        //     <button
        //       onClick={() => setOpenIndex(index === openIndex ? null : index)}
        //       className="w-full text-left font-medium"
        //     >
        //       {faq.q}
        //     </button>

        //     {openIndex === index && (
        //       <p className="mt-2 text-gray-600">{faq.a}</p>
        //     )}
        //   </div>
        // ))
        map((item, index) => (
            <details
              key={index}
              className="group bg-[#F9FAFB] rounded-xl p-5 shadow-sm cursor-pointer"
            >
              <summary className="flex justify-between items-center font-medium text-lg">
                {item.q}
                <span className="transition-transform group-open:rotate-180">⌄</span>
              </summary>
              <p className="mt-3 text-gray-600 leading-relaxed">
                {item.a}
              </p>
            </details>
          ))}
        
      </div>
    </section>
  );
}
