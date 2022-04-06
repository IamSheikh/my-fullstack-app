import styles from '../styles/Button.module.scss';

const Button = ({ children, radius, bgColor, color }) => {
  return (
    <button
      className={styles.btn}
      style={{
        borderRadius: radius && radius,
        backgroundColor: bgColor && bgColor,
        color: color && color,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
