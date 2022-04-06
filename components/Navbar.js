import styles from '../styles/Navbar.module.scss';
import useAuth from '../hooks/useAuth';
import Button from './Button';
import { Avatar } from '@mui/material';
import Link from './Link';

const Navbar = () => {
  const { user } = useAuth();

  return (
    user && (
      <nav className={styles.navbar}>
        <h1 className={styles.logo}>FoolSocial</h1>
        <Link path={`/users/${user.username}`}>
          <div className={styles.user_container}>
            <Avatar style={{ marginRight: '0.5rem' }}>
              {user.firstName[0]}
            </Avatar>
            <h1>Hello {user.firstName}!</h1>
          </div>
        </Link>
        <Button radius='5px' bgColor='#00b4b4'>
          Logout
        </Button>
      </nav>
    )
  );
};

export default Navbar;
