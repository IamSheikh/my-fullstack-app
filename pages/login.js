import Page from '../components/Page';
import useAuth from '../hooks/useAuth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styles from '../styles/Login.module.scss';
import LoginForm from '../components/LoginForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from '../components/Link';

const Login = () => {
  const { user, login } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user, router]);

  const loginUser = (user) => {
    fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then(async (res) => {
      const data = await res.json();

      if (data.status === 'error') {
        toast.error(data.error, {
          position: 'bottom-center',
          theme: 'colored',
        });
      }

      if (data.status === 'ok') {
        const { token } = data.data;

        toast.success('Logged In Successfully', {
          position: 'bottom-center',
          theme: 'colored',
        });
        setTimeout(() => {
          login(token);
          router.push('/');
        }, 5000);
      }
    });
  };

  return (
    <Page title='Login'>
      <div className={styles.container}>
        <h1>Login</h1>
        <LoginForm submitHandler={loginUser} />
        <ToastContainer />
        <Link path='/register'>Not have an account? Register</Link>
      </div>
    </Page>
  );
};

export default Login;
