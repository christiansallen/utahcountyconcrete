export default function Header() {
  return (
    <header className="flex items-center justify-between px-4">
      {/* Call Now Button */}
      <a
        href="tel:+1234567890"
        className="flex items-center gap-1.5 bg-black text-white text-[12px] font-semibold px-3 py-2 rounded-lg border-2 border-white/12 hover:opacity-90 transition-opacity"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
          <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" clipRule="evenodd" />
        </svg>
        Call Now
      </a>

      {/* Logo - local file */}
      <img src="/assets/logo-black.svg" alt="Utah County Concrete" className="h-10" />

      {/* Hamburger Menu */}
      <button className="flex flex-col justify-center items-center gap-1.5 w-9 h-9 cursor-pointer bg-transparent border-none" aria-label="Menu">
        <span className="block w-5 h-0.5 bg-black rounded-full" />
        <span className="block w-5 h-0.5 bg-black rounded-full" />
        <span className="block w-5 h-0.5 bg-black rounded-full" />
      </button>
    </header>
  );
}
