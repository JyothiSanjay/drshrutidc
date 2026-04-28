import { useEffect, useState } from 'react';

export default function Header({ logo, active, setActive }) {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach((section) => {
            if (section.id) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);
    return (
        // <header className="sticky top-0 bg-white shadow-sm flex justify-between items-center px-6 md:px-12 py-4 z-50">
        <header className="sticky top-0 backdrop-blur-md bg-white/70 border-b border-gray-200 px-6 md:px-12 py-4 z-50 flex justify-between items-center">
            <div className="flex items-center gap-3">
                <img
                    src={logo}
                    alt="Clinic Logo"
                    className="w-10 h-10 object-contain"

                />

                <h1 className="text-2xl font-semibold text-[#0109f4]">
                    Dr. Shruti's Dental Clinic
                </h1>
            </div>
            <nav className="space-x-6 hidden md:flex">
                {[
                    { id: "home", label: "Home" },
                    { id: "services", label: "Services" },
                    { id: "about", label: "About" },
                    { id: "testimonials", label: "Testimonials" },
                    { id: "gallery", label: "Gallery" },
                    { id: "contact", label: "Contact" }
                ].map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={(e) => {
                            e.preventDefault();
                            setActive(item.id)
                            document.getElementById(item.id).scrollIntoView({
                                behavior: "smooth"
                            });
                        }}
                        className={`cursor-pointer pb-1 border-b-2 transition ${active === item.id
                            ? "text-[#5A4FCF] border-[#5A4FCF] hover:text-bold-[#5A4FCF]"
                            : "text-gray-600 border-transparent hover:text-[#5A4FCF] hover:bold-[#5A4FCF]"
                            }`}
                    >
                        {item.label}
                    </a>
                ))}
            </nav>
        </header>
    )
}
