export default function Page() {
  return (
    <main className='flex min-h-screen flex-col p-6'>
      <div className='flex h-20 shrink-0 items-end rounded-lg bg-green-800 p-4 md:h-52'>
        Hola
      </div>
      <div className='mt-4 flex grow flex-col gap-4 md:flex-row'>
        <div className='flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20'>
          Handcrafted Haven is an innovative web application that aims to
          provide a platform for artisans and crafters to showcase and sell
          their unique handcrafted items.
        </div>
      </div>
    </main>
  );
}
