import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className='bg-blue'>
        <div className='container mx-auto px-4 py-12'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
            <div className='text-center md:text-left'>
              <h1 className='text-4xl font-bold text-gray-900 mb-4'>
                Discover Exquisite Flavors
              </h1>
              <p className='text-lg text-gray-700 mb-6'>
                Elevate your culinary experience with our carefully curated
                selection of gourmet foods from around the world.
              </p>
              <a
                href='/products'
                className='bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300'
              >
                Explore Now
              </a>
            </div>
            <div className='flex justify-center'>
              <Image
                src='/images/food.jpg'
                alt='Delicious Food'
                className='rounded-lg'
                width={250}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
      <section className='bg-gray-100 py-10'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center text-gray-900 mb-8'>
            Discover Our Premium Selection
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='flex flex-col items-center'>
              <Image
                src='/images/feature1.jpg'
                alt='Feature 1'
                className='w-32 h-32 object-cover rounded-full mb-4'
                width={100}
                height={100}
              />
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                Exquisite Taste
              </h3>
              <p className='text-gray-700 text-center'>
                Indulge in the rich and delightful flavors of our gourmet
                products.
              </p>
            </div>
            <div className='flex flex-col items-center'>
              <Image
                src='/images/feature2.jpg'
                alt='Feature 2'
                className='w-32 h-32 object-cover rounded-full mb-4'
                width={100}
                height={100}
              />
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                Premium Quality
              </h3>
              <p className='text-gray-700 text-center'>
                We source only the finest ingredients to ensure the highest
                quality standards.
              </p>
            </div>
            <div className='flex flex-col items-center'>
              <Image
                src='/images/feature3.jpg'
                alt='Feature 3'
                className='w-32 h-32 object-cover rounded-full mb-4'
                width={100}
                height={100}
              />
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                Artisan Crafted
              </h3>
              <p className='text-gray-700 text-center'>
                Each product is meticulously crafted by skilled artisans with
                passion and dedication.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-white py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center text-gray-900 mb-8'>
            What Our Customers Say
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='p-8 bg-gray-100 rounded-lg'>
              <p className='text-gray-700 mb-4'>
                "Absolutely delicious! The food is always fresh and bursting
                with flavor. I'm a loyal customer now!"
              </p>
              <p className='text-gray-900 font-semibold'>- Emily S.</p>
            </div>
            <div className='p-8 bg-gray-100 rounded-lg'>
              <p className='text-gray-700 mb-4'>
                "I'm impressed with the variety of options available. There's
                something for every taste bud!"
              </p>
              <p className='text-gray-900 font-semibold'>- Mark T.</p>
            </div>
            <div className='p-8 bg-gray-100 rounded-lg'>
              <p className='text-gray-700 mb-4'>
                "Top-notch service! Orders are always delivered on time and the
                packaging is impeccable."
              </p>
              <p className='text-gray-900 font-semibold'>- Sarah L.</p>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-white py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center text-gray-900 mb-8'>
            Our Services
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='p-8 bg-gray-100 rounded-lg shadow-md'>
              <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                Catering
              </h3>
              <p className='text-gray-700'>
                We offer catering services for all occasions. From intimate
                gatherings to large events, we've got you covered.
              </p>
            </div>
            <div className='p-8 bg-gray-100 rounded-lg shadow-md'>
              <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                Delivery
              </h3>
              <p className='text-gray-700'>
                Enjoy our delicious food delivered straight to your door. Fast
                and convenient delivery options available.
              </p>
            </div>
            <div className='p-8 bg-gray-100 rounded-lg shadow-md'>
              <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                Event Planning
              </h3>
              <p className='text-gray-700'>
                Let us help you plan your next event. Our expert team will take
                care of every detail to ensure a memorable experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
