import Page from '../components/Page';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useAuth from '../hooks/useAuth';

export default function Home() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  return (
    user && (
      <Page title='Home'>
        <h1>Hello {user.firstName}!</h1>
      </Page>
    )
  );
}
