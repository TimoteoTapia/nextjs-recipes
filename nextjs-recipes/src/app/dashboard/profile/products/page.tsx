import { fetchUserByEmail } from '@/lib/data';
import { CreateProductButton } from '@/ui/profile/Buttons';
import ProductProfileComponent from '@/ui/profile/ProductsProfile';
import { auth } from '@/lib/auth/auth';
import Link from 'next/link';

export default async function ProductsProfilePage() {
  const user = await auth();
  // User variable return this output: {user:{ name: 'John Doe', email:'johndoe@gmail.com'}, expires: '2023-03-01'}
  const userEmail = user?.user?.email as string;

  const fetchUser = await fetchUserByEmail(userEmail);

  const userId = fetchUser?.id as string;
  return (
    <>
      <div className='flex justify-between'>
        <h1 className='text-2xl font-bold text-gray-800'>Profile</h1>
        <div className='ml-5 flex space-x-2'>
          <CreateProductButton />
          <Link
            href='/dashboard/profile'
            className='rounded-md bg-blue-500 px-4 py-2 text-white shadow-md transition duration-300 hover:bg-blue-600'
          >
            Profile
          </Link>
        </div>
      </div>
      <div className='flex-column flex'>
        <ProductProfileComponent id={userId} />
      </div>
    </>
  );
}
