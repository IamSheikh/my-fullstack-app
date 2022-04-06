import '../styles/globals.scss';
import { AuthProvider } from '../hooks/useAuth';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

  useEffect(() => {
    if (
      localStorage.getItem('token') !== null ||
      localStorage.getItem('token') !== undefined
    ) {
      setUserIsLoggedIn(true);
    } else {
      setUserIsLoggedIn(false);
    }
  }, []);

  return (
    <AuthProvider>
      {userIsLoggedIn ? <Navbar /> : null}
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
