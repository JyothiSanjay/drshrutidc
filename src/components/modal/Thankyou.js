import React from 'react'

export default function Thankyou({setShowSuccess, setIsSubmitted}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg text-center w-[90%] md:w-[350px]">
              <h2 className="text-xl font-semibold text-[#5A4FCF] mb-3">Appointment Confirmed </h2>
              <p className="text-gray-600 mb-4">
                Thank you! Your appointment request has been received. We will contact you shortly.
              </p>
              <button
                onClick={() => { setShowSuccess(false); setIsSubmitted(false); }}
                className="bg-[#2ECC71] text-white px-4 py-2 rounded"
              >
                OK
              </button>
            </div>
          </div>
  )
}
