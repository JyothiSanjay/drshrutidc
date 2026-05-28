import React, { useState } from 'react'

export default function Appointment({ isSubmitted, setIsSubmitted, setShowModal, setShowSuccess }) {
    const today = new Date().toISOString().split('T')[0];
    const time = new Date().toLocaleTimeString();
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 2);
    const maxDateStr = maxDate.toISOString().split("T")[0];
    const [todayDate, setTodayDate] = useState(today);
    const [formData, setFormData] = useState({ Name: '', Phone: '', App_Date: todayDate, Book_Date: today, Message: '' });
    const [errors, setErrors] = useState({});

    function validateForm() {
        const phoneRegex = /^\d{10}$/;
        let newErrors = {};
        if (!formData.Name?.trim()) {
            newErrors.Name = "Please enter your full name";
        }

        if (!formData.Phone?.trim() || !phoneRegex.test(formData.Phone)) {
            newErrors.Phone = "Please enter your phone number";
        }

        if (!formData.App_Date) {
            newErrors.App_Date = "Please select an appointment date";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;

    }
    const handleSubmit = (e) => {

        e.preventDefault();
        if (!validateForm()) return;
        setIsSubmitted(true);

        const url = "https://script.google.com/macros/s/AKfycbyOqOy9P_NR43OPDb9Yw21o8jyI4KtHg8fOwh2GeMIheeLhKfGRLz_E8fBRe9O0XKGrXQ/exec"
        fetch(url, {
            method: "POST",
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        }).then((res) => res.text())
            .then((data) => {
                setShowModal(false);
                setShowSuccess(true);
            }).catch((err) => {
                console.error(err);
                alert("There was an error submitting your request. Please try again.");
            });

    }
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
            <div className="relative bg-white p-6 rounded-lg w-[90%] md:w-[400px]">
                <div
                    onClick={() => setShowModal(false)}
                    className="absolute top-2 cursor-pointer right-2 p-2 text-gray-500 hover:text-gray-700"
                >X
                </div>
                <h2 className="text-xl font-semibold  mb-4">Book an Appointment</h2>
                <div className='flex flex-col gap-3'>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                        <div className="w-full">
                            <input name="Name" type="text" placeholder="Name"
                                className={`
      w-full
      rounded-2xl
      border
      px-4
      py-3
      bg-white/80
      backdrop-blur-xl
      transition

      ${errors.Name
                                        ? "border-red-400 focus:ring-red-200"
                                        : "border-gray-200 focus:ring-[#5A4FCF]/20"
                                    }

      focus:outline-none
      focus:ring-4
    `}
                                required onChange={(e) => {setFormData({ ...formData, Name: e.target.value }); validateForm()}} />
                            {errors.Name && (
                                <p className="mt-2 text-sm text-red-500 pl-1">
                                    {errors.Name}
                                </p>

                            )}
                        </div>
                        <div className="w-full">
                            <input name="Phone" type="tel" placeholder="Phone"
                                className={`
      w-full
      rounded-2xl
      border
      px-4
      py-3
      bg-white/80
      backdrop-blur-xl
      transition

      ${errors.Phone
                                        ? "border-red-400 focus:ring-red-200"
                                        : "border-gray-200 focus:ring-[#5A4FCF]/20"
                                    }

      focus:outline-none
      focus:ring-4
    `}
                                required onChange={(e) => {setFormData({ ...formData, Phone: e.target.value }); validateForm()}} />
                            {errors.Phone && (
                                <p className="mt-2 text-sm text-red-500 pl-1">
                                    {errors.Phone}
                                </p>

                            )}
                        </div>
<div className="w-full">
    <input name="App_Date" onKeyDown={(e) => e.preventDefault()}
                            type="date" 
                            className={`
      w-full
      rounded-2xl
      border
      px-4
      py-3
      bg-white/80
      backdrop-blur-xl
      transition

      ${errors.App_Date
                                        ? "border-red-400 focus:ring-red-200"
                                        : "border-gray-200 focus:ring-[#5A4FCF]/20"
                                    }

      focus:outline-none
      focus:ring-4
    `}
                            required min={today} max={maxDateStr} onChange={(e) => { setTodayDate(e.target.value); setFormData({ ...formData, App_Date: e.target.value });validateForm() }} value={todayDate} />
                             {errors.Book_Date && (
                                <p className="mt-2 text-sm text-red-500 pl-1">
                                    {errors.Book_Date}
                                </p>

                            )}
                            {errors.App_Date && (
                                <p className="mt-2 text-sm text-red-500 pl-1">
                                    {errors.App_Date}
                                </p>

                            )}
</div>
                        
                        <input name="Book_Date" type="hidden" value={today} />
                        <textarea name="Message" placeholder="Message" required className={`
      w-full
      rounded-2xl
      border
      px-4
      py-3
      bg-white/80
      backdrop-blur-xl
      transition

      ${errors.App_Date
                                        ? "border-red-400 focus:ring-red-200"
                                        : "border-gray-200 focus:ring-[#5A4FCF]/20"
                                    }

      focus:outline-none
      focus:ring-4
    `}
                        onChange={(e) => setFormData({ ...formData, Message: e.target.value })} >{`Hello Doctor, I would like to book an appointment `}</textarea >
                        <button
                            disabled={isSubmitted}
                            className="bg-[#5A4FCF] text-white w-full py-2 rounded"
                            style={{ backgroundColor: isSubmitted ? "bg-[#8885ac]" : "bg-[#5A4FCF]", cursor: isSubmitted ? "not-allowed" : "pointer" }}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
