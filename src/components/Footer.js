export default function Footer() {
    const year = new Date().getFullYear();
    return (
      <>
        <footer className="bg-[#1857aa] text-white text-center py-6">
        <p>© {year} Dr. Shruthi's Dental Clinic</p>
      </footer>
      </>
    )
}


