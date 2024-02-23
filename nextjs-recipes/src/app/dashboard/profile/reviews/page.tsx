import { fetchUserByEmail } from '@/lib/data';
import ReviewsComponent from '@/ui/profile/ReviewsComponent';
import { auth } from '@/lib/auth/auth';

export default async function ProfileReviews() {
  const session = await auth();
  const userEmail = session?.user?.email as string;
  const userData = await fetchUserByEmail(userEmail);
  const userId = userData?.id as string;
  return (
    <>
      <div>
        <div>
          <ReviewsComponent id={userId} />
        </div>
      </div>
    </>
  );
}
