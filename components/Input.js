import styles from '../styles/Input.module.scss';

const Input = ({
  type,
  name,
  placeholder,
  required = false,
  setValue,
  value,
}) => {
  return (
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      className={styles.input}
      onChange={(e) => setValue(e.target.value)}
      value={value}
      required={required}
    />
  );
};

export default Input;
