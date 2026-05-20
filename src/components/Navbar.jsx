import { useState } from "react";

const NAV_LINKS = [
  { label: "Sobre mí",    href: "#about" },
  { label: "Habilidades", href: "#skills" },
  { label: "Proyectos",   href: "#projects" },
  { label: "Contacto",    href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-base-100/80 border-b border-base-300/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#"
            className="text-2xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            MJ
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-base-content/60 hover:text-primary transition-colors duration-200 text-sm font-medium"
              >
                {label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden p-2 rounded-lg text-base-content/60 hover:text-primary hover:bg-base-200 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            )}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-4 pt-2 border-t border-base-300/30">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 rounded-lg text-base-content/60 hover:text-primary hover:bg-base-200 transition-colors text-sm font-medium"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
