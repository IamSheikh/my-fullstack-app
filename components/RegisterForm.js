import Input from './Input';
import Button from './Button';
import styles from '../styles/RegisterForm.module.scss';
import { useId, useState } from 'react';

const RegisterForm = ({ submitHandler }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handler = (e) => {
    e.preventDefault();

    setUsername((prev) => prev.replace(' ', ''));
    username = username.replace(' ', '');

    submitHandler({ firstName, lastName, username, password });
  };

  const inputs = [
    {
      id: useId(),
      name: 'firstName',
      type: 'text',
      placeholder: 'First Name',
      required: true,
      value: firstName,
      onChange: setFirstName,
    },
    {
      id: useId(),
      name: 'lastName',
      type: 'text',
      placeholder: 'Last Name',
      required: true,
      value: lastName,
      onChange: setLastName,
    },
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
  return (
    <form onSubmit={handler} className={styles.container}>
      {inputs.map((input) => (
        <div key={input.id} className={styles.form_group}>
          <Input
            name={input.name}
            placeholder={input.placeholder}
            type={input.type}
            value={input.value}
            setValue={input.onChange}
          />
        </div>
      ))}
      <Button radius='5px' bgColor='#00b4b4'>
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
