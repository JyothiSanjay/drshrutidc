export default function Footer() {
    const year = new Date().getFullYear();
    return (
      <>
        <footer className="bg-[#0109f4] text-white text-center py-6">
        <p>© {year} Dr. Shruti's Dental Clinic</p>
      </footer>
      </>
    )
}


