import React, { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔐</span>
            <span className="text-xl font-bold tracking-wide text-indigo-400">PassGen</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="hover:text-indigo-400 transition-colors duration-200 font-medium">Home</a>
            <a href="#" className="hover:text-indigo-400 transition-colors duration-200 font-medium">Generate</a>
            <a href="#" className="hover:text-indigo-400 transition-colors duration-200 font-medium">About</a>
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
              Get Started
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 px-4 pb-4 flex flex-col gap-3">
          <a href="#" className="block py-2 hover:text-indigo-400 transition-colors duration-200 font-medium">Home</a>
          <a href="#" className="block py-2 hover:text-indigo-400 transition-colors duration-200 font-medium">Generate</a>
          <a href="#" className="block py-2 hover:text-indigo-400 transition-colors duration-200 font-medium">About</a>
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 w-full">
            Get Started
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
