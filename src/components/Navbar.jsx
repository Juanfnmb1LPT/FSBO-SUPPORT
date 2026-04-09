import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <svg
              className="w-6 h-6 text-cyan-400 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              ></path>
            </svg>
            <span className="font-semibold text-xl text-white">FSBOSupport</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/?section=home" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <Link to="/?section=resources" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Resources
            </Link>
            <Link to="/?section=help" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Get Help
            </Link>
          </div>

          <Link
            to="/support"
            className="hidden md:inline-flex bg-cyan-500 hover:bg-cyan-600 text-white rounded-full px-6 py-2 btn-primary font-semibold"
          >
            Get Started
          </Link>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-lg border border-gray-700 bg-gray-800 p-2 text-gray-100 hover:bg-gray-700"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {mobileMenuOpen ? (
          <div className="md:hidden border-t border-gray-800 py-3 space-y-3">
            <Link
              to="/?section=home"
              className="block text-gray-300 hover:text-cyan-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/?section=resources"
              className="block text-gray-300 hover:text-cyan-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resources
            </Link>
            <Link
              to="/?section=help"
              className="block text-gray-300 hover:text-cyan-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Help
            </Link>
            <Link
              to="/support"
              className="inline-flex bg-cyan-500 hover:bg-cyan-600 text-white rounded-full px-5 py-2 btn-primary font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        ) : null}
      </div>
    </nav>
  );
}

export default Navbar;
