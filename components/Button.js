import styles from '../styles/Button.module.scss';

const Button = ({ children, radius, bgColor, color, click }) => {
  return (
    <button
      className={styles.btn}
      style={{
        borderRadius: radius && radius,
        backgroundColor: bgColor && bgColor,
        color: color && color,
      }}
      onClick={() => {
        click && click();
      }}
    >
      {children}
    </button>
  );
};

export default Button;
