import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const whatsappMessage = "Hi%20Ayath_iCakes!%20%F0%9F%91%8B%0A%0A%F0%9F%8E%82%20I'd%20like%20to%20enquire%20about%20your%20delicious%20cakes!%0A%0A%E2%9C%A8%20I'm%20interested%20in:%0A%E2%80%A2%20Custom%20Design%20Cakes%20(Theme/Photo%20Cakes)%0A%E2%80%A2%20Birthday%20Cakes%20(Kids/Adults%20Special)%0A%E2%80%A2%20Wedding%20%26%20Anniversary%20Cakes%0A%E2%80%A2%20Special%20Occasion%20Cakes%0A%E2%80%A2%20Corporate%20Event%20Cakes%0A%0A%F0%9F%8E%A8%20Design%20Preferences:%0A%E2%80%A2%20Fondant/Cream%20Design%0A%E2%80%A2%20Multi-tier%20Options%0A%E2%80%A2%20Photo%20Printing%0A%E2%80%A2%20Custom%20Theme%20Creation%0A%0A%F0%9F%92%9D%20Please%20help%20me%20with:%0A%E2%80%A2%20Design%20customization%20options%0A%E2%80%A2%20Available%20sizes%20and%20servings%0A%E2%80%A2%20Price%20range%0A%E2%80%A2%20Delivery/pickup%20information%0A%0AThank%20you!%20%F0%9F%98%8A";

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-pink-200">
              <img src="/logo.jpg" alt="Ayath_iCakes Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
                Ayath_iCakes
              </h1>
              <p className="text-xs text-gray-600">Baking Studio</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative font-medium transition-colors duration-300 ${
                  isActiveLink(item.path)
                    ? 'text-pink-600'
                    : 'text-gray-700 hover:text-pink-600'
                }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-pink-600 transition-all duration-300 ${
                    isActiveLink(item.path) ? 'w-full' : 'w-0'
                  }`}
                ></span>
              </Link>
            ))}
          </nav>

          {/* Phone & Order Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:8248477869"
              className="flex items-center space-x-2 bg-pink-50 hover:bg-pink-100 text-pink-600 px-4 py-2 rounded-full transition-all duration-300 group"
            >
              <Phone className="h-4 w-4 group-hover:animate-pulse" />
              <span className="font-medium">Call Us</span>
            </a>
            <a
              href={`https://wa.me/918248477869?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-2 rounded-full hover:from-pink-600 hover:to-pink-700 transition-all duration-300 transform hover:-translate-y-1 font-medium shadow-lg group"
            >
              <span className="flex items-center space-x-1">
                <span>Order Now</span>
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-6">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium transition-colors ${
                    isActiveLink(item.path)
                      ? 'text-pink-600'
                      : 'text-gray-700 hover:text-pink-600'
                  } px-4 py-2 rounded-lg`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:8248477869"
                className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-pink-600"
              >
                <Phone className="h-4 w-4" />
                <span>Call Us</span>
              </a>
              <a
                href={`https://wa.me/918248477869?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 py-2 rounded-lg font-medium text-center"
              >
                Order Now
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}