import { fetchUserByEmail } from '@/lib/data';
import { CreateProductButton } from '@/ui/profile/Buttons';
import CreateProductComponent from '@/ui/profile/CreateProductComponent';
import { auth } from '@/lib/auth/auth';

export default async function ProfileCreateProduct() {
  const session = await auth();
  const userEmail = session?.user?.email as string;
  const userData = await fetchUserByEmail(userEmail);
  const userId = userData?.id as string;
  return (
    <>
      <div>
        <div>
          <h1>Create Product</h1>
        </div>
        <CreateProductComponent id={userId} />
      </div>
    </>
  );
}
