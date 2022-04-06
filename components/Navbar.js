import styles from '../styles/Navbar.module.scss';
import useAuth from '../hooks/useAuth';
import Button from './Button';
import { Avatar } from '@mui/material';
import Link from 'next/link';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    user && (
      <nav className={styles.navbar}>
        <Link href='/'>
          <a className={styles.link}>
            <h1 className={styles.logo}>FoolSocial</h1>
          </a>
        </Link>
        <Link href={`/users/${user.username}`}>
          <a className={styles.link}>
            <div className={styles.user_container}>
              <Avatar className={styles.avatar}>{user.firstName[0]}</Avatar>
              <h1 className={styles.text}>
                {user.firstName} {user.lastName}
              </h1>
            </div>
          </a>
        </Link>

        <Button click={() => logout()} radius='5px' bgColor='#00b4b4'>
          Logout
        </Button>
      </nav>
    )
  );
};

export default Navbar;
