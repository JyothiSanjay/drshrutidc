import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from 'react-icons/fa';

export default function FloatingButtons({ phoneNumber, whatsappNumber }) {
    return (
        <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
            <a
                href={`https://wa.me/${whatsappNumber}?text=Hello Doctor, I would like to book an appointment`}
                target="_blank"
                rel="noopener noreferrer"
                // className="bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:opacity-90"
                className="bg-green-500 w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition text-white "
            >
                <a href="https://wa.me" target="_blank" rel="noreferrer">
                    <FaWhatsapp size={30} />
                </a>
            </a>
            <a
                href={`tel:${phoneNumber}`}
                // className="bg-[#0109f4] text-white px-4 py-3 rounded-full shadow-lg hover:opacity-90"
                className="bg-[#0109f4] w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition text-white "
            >
                <FaPhoneAlt size={30} />
            </a>
        </div>
    )
}
