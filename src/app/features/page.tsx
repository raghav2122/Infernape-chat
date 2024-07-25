import { options } from '../api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function FeaturesPage() {
  const session = await getServerSession(options);
  if (!session) {
    redirect('/login');
  }
  return <div>Features Page</div>;
}
