import Page from '../components/Page';
import useAuth from '../hooks/useAuth';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import RegisterForm from '../components/RegisterForm';
import styles from '../styles/Register.module.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from '../components/Link';

const Register = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user, router]);

  const registerUser = ({ firstName, lastName, username, password }) => {
    const user = { firstName, lastName, username, password };
    fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(async (res) => {
        const data = await res.json();
        if (data.status === 'error') {
          toast.error(data.error, {
            position: 'bottom-center',
            theme: 'colored',
          });
        }

        if (data.status === 'ok') {
          toast.success('User registered successfully', {
            position: 'bottom-center',
            theme: 'colored',
          });

          setTimeout(() => {
            router.push('/login');
          }, 5000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Page title='Register'>
      <div className={styles.container}>
        <h1>Register</h1>
        <RegisterForm submitHandler={registerUser} />
        <ToastContainer />
        <Link path='/login'>Already have an account? Login</Link>
      </div>
    </Page>
  );
};

export default Register;
