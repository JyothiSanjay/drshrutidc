import React from 'react'

export default function FloatingButtons({phoneNumber, whatsappNumber}) {
    return (
        <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
            <a
                href={`https://wa.me/${whatsappNumber}?text=Hello Doctor, I would like to book an appointment`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:opacity-90"
            >
                WhatsApp
            </a>
            <a
                href={`tel:${phoneNumber}`}
                className="bg-[#0109f4] text-white px-4 py-3 rounded-full shadow-lg hover:opacity-90"
            >
                Call
            </a>
        </div>
    )
}
