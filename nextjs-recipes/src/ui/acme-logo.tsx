import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function AcmeLogo() {
  return (
    <div className={`flex flex-row items-center leading-none text-white`}>
      <ShoppingBagIcon className='h-12 w-12 rotate-[15deg]' />
      <Image
        src='/nextjs-recipes/src/app/cake.png'
        alt='Your Logo'
        className='h-16 md:h-20 ml-4'
        width={150}
        height={150}
      />
      <p className='text-[24px]'>Cake & Bakery</p>
    </div>
  );
}
