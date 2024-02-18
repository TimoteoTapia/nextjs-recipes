import Image from 'next/image';

export default function Footer() {
  const time = new Date().getFullYear();

  return (
    <footer className='bg-gray-800 text-white py-6'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap justify-between items-center'>
          <div className='flex justify-start space-x-3'>
            <Image
              src='https://api.lorem.space/image/face?w=120&h=120&hash=bart89fe'
              className='w-28 rounded-full '
              alt='logo'
              width={30}
              height={30}
            />
            {/* Agrega la imagen */}
          </div>
          <div className='w-full md:w-1/2 text-center md:text-left mb-4 md:mb-0'>
            <p>&copy; 2024 Tu Nombre. Todos los derechos reservados.</p>
          </div>
          <div className='w-full md:w-1/2 text-center md:text-right'>
            <ul className='flex justify-center md:justify-end'>
              <li className='mx-2'>
                <a href='#' className='hover:text-gray-400'>
                  Inicio
                </a>
              </li>
              <li className='mx-2'>
                <a href='#' className='hover:text-gray-400'>
                  Acerca de
                </a>
              </li>
              <li className='mx-2'>
                <a href='#' className='hover:text-gray-400'>
                  Servicios
                </a>
              </li>
              <li className='mx-2'>
                <a href='#' className='hover:text-gray-400'>
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div className='py-6 text-base text-black-bean-50 text-center'>
            © {time} BudgetBuddy. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
