import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import validator from 'validator';
export const RegisterPage = () => {
  const [formValues, handleInputChange, reset] = useForm({
    name: 'RogerTest',
    email: 'roger@got.com',
    password: '123456',
    password2: '123456',
  });
  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(`formValues`, name, email, password, password2);
    if (isFormValid()) {
      console.log(`el form es correcto`);
    }
    reset();
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      console.log(`Name is required`);
      return false;
    } else if (!validator.isEmail(email)) {
      console.log(`Email is not valid`);
      return false;
    } else if (password.trim().length < 5 || password2 !== password) {
      console.log(`Password is not valid`);
      return false;
    }

    return true;
  };

  return (
    <>
      <h3 className="auth__title">Register...</h3>
      <form onSubmit={handleRegister}>
        <div className="auth__alert-error">Hola Errror</div>
        <input
          className="auth__input"
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          autoComplete="off"
          required={true}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          autoComplete="off"
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          name="password2"
          placeholder="Confirm Password"
          value={password2}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-primary btn-block mb-5">
          Register
        </button>
      </form>

      <Link className="link" to="/auth/register">
        Already registered?
      </Link>
    </>
  );
};
