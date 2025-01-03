import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-zinc-900/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-[#FF7051]">
              Portfolio
            </a>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            <NavLinks />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-zinc-900">
            <NavLinks mobile />
          </div>
        </div>
      )}
    </nav>
  );
};

function NavLinks({ mobile = false }) {
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  const baseStyles = mobile
    ? 'block px-3 py-2 text-base font-medium'
    : 'text-sm font-medium';
  const colorStyles = 'text-gray-300 hover:text-[#FF7051] transition-colors';

  return links.map((link) => (
    <a key={link.href} href={link.href} className={`${baseStyles} ${colorStyles}`}>
      {link.label}
    </a>
  ));
}

export default Navbar;
