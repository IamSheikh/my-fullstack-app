import NextLink from 'next/link';
import styles from '../styles/Link.module.scss';

const Link = ({ path, children }) => {
  return (
    <NextLink href={path}>
      <a className={styles.link}>{children}</a>
    </NextLink>
  );
};

export default Link;
