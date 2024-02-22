export default function Page() {
  return (
    <main className='flex flex-col min-h-screen p-6'>
      {/* Header */}
      <header className='flex justify-center items-center h-20 md:h-24 bg-green-800 text-white font-semibold text-xl md:text-2xl rounded-t-lg'>
        Welcome to Cake Dashboard
      </header>

      {/* Main Content */}
      <div className='flex flex-col md:flex-row gap-6 mt-8'>
        {/* Side Navigation */}
        <aside className='bg-gray-800 text-white rounded-lg p-4 md:w-1/4'>
          <h2 className='text-lg font-semibold mb-4'>Navigation</h2>
          <ul className='space-y-2'>
            <li>
              <a href='#' className='hover:text-green-400'>
                Home
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-green-400'>
                Orders
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-green-400'>
                Products
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-green-400'>
                Customers
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-green-400'>
                Settings
              </a>
            </li>
          </ul>
        </aside>

        {/* Main Content Area */}
        <section className='md:w-3/4'>
          <h1 className='text-2xl font-semibold mb-4'>
            Welcome to Cake Dashboard!
          </h1>
          <p className='text-gray-600 leading-relaxed'>
            Handcrafted Haven is an innovative web application that aims to
            provide a platform for artisans and crafters to showcase and sell
            their unique handcrafted items. From delicious cakes to stunning
            decorations, this is the place to discover the finest handcrafted
            treats for any occasion.
          </p>
          <p className='text-gray-600 mt-4 leading-relaxed'>
            Our platform connects passionate bakers with cake enthusiasts,
            offering a seamless experience for browsing, ordering, and sharing
            delightful creations. Whether you're a baker looking to expand your
            customer base or a cake lover in search of the perfect dessert,
            Handcrafted Haven has something for everyone.
          </p>
          <p className='text-gray-600 mt-4 leading-relaxed'>
            Join us on this sweet journey as we celebrate the art of baking and
            bring joy to every slice!
          </p>
        </section>
      </div>
    </main>
  );
}
