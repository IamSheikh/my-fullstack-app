import { useState, useId } from 'react';
import styles from '../styles/LoginForm.module.scss';
import Input from './Input';
import Button from './Button';

const LoginForm = ({ submitHandler }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const inputs = [
    {
      id: useId(),
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      required: true,
      value: username,
      onChange: setUsername,
    },
    {
      id: useId(),
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      required: true,
      value: password,
      onChange: setPassword,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    submitHandler({
      username,
      password,
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      {inputs.map((input) => (
        <div key={input.id} className={styles.form_group}>
          <Input
            name={input.name}
            type={input.type}
            placeholder={input.placeholder}
            value={input.value}
            setValue={input.onChange}
          />
        </div>
      ))}
      <Button radius='5px' bgColor='#00b4b4'>
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
