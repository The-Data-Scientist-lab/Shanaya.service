import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-sm shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <svg
            className="h-8 w-8 text-pink-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          <span className={`font-bold text-xl ml-2 ${
            isScrolled ? "text-pink-500" : "text-white"
          }`}>
            Shanaya Private
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#pricing"
            className={`font-medium transition-colors ${
              isScrolled ? "text-gray-600 hover:text-pink-500" : "text-white/80 hover:text-white"
            }`}
          >
            Pricing
          </a>
          <a
            href="#stats"
            className={`font-medium transition-colors ${
              isScrolled ? "text-gray-600 hover:text-pink-500" : "text-white/80 hover:text-white"
            }`}
          >
            About Us
          </a>
        </nav>

        <div className="hidden md:block">
          <a 
            href="https://t.me/shanaya_Service"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="bg-gradient-to-r from-pink-500 to-indigo-500 text-white hover:from-pink-600 hover:to-indigo-600 shadow-md"
            >
              Contact Now
            </Button>
          </a>
        </div>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className={`h-6 w-6 ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <a
              href="#pricing"
              className="block py-2 text-gray-700 font-medium hover:text-pink-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#stats"
              className="block py-2 text-gray-700 font-medium hover:text-pink-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </a>
            <div className="pt-4">
              <a 
                href="https://t.me/shanaya_Service"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button className="w-full bg-gradient-to-r from-pink-500 to-indigo-500 text-white hover:from-pink-600 hover:to-indigo-600 shadow-md">
                  Contact Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
