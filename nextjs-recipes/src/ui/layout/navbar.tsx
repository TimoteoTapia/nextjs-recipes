import React from 'react';

export default function Navbar() {
  return (
    <nav className='bg-primary shadow-lg fixed top-0 w-full'>
      <div className='mx-auto px-4 py-2'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <a href='#' className='text-white text-lg font-bold'>
              Cooking Haven
            </a>
          </div>
          {/* Navigation Links */}
          <div className='hidden flex-1 md:block'>
            <ul className='flex space-x-4'>
              <li>
                <a href='#' className='text-white hover:text-gray-300'>
                  Inicio
                </a>
              </li>
              <li>
                <a href='#' className='text-white hover:text-gray-300'>
                  Recetas
                </a>
              </li>
              <li>
                <a href='#' className='text-white hover:text-gray-300'>
                  Blog
                </a>
              </li>
              <li>
                <a href='#' className='text-white hover:text-gray-300'>
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          {/* Mobile Menu Button (Shown on small screens) */}
          <div className='md:hidden'>
            {/* Insert mobile menu button here */}
          </div>
        </div>
      </div>
    </nav>
  );
}
