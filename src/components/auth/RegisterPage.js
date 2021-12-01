import React from 'react';
import { Link } from 'react-router-dom';
export const RegisterPage = () => {
  return (
    <>
      <h3 className="auth__title">Register...</h3>
      <form>
        <input
          className="auth__input"
          type="text"
          name="name"
          placeholder="Name"
          autoComplete="off"
        />
        <input
          className="auth__input"
          type="text"
          name="email"
          placeholder="Email"
          autoComplete="off"
        />
        <input
          className="auth__input"
          type="text"
          name="password"
          placeholder="Password"
        />
        <input
          className="auth__input"
          type="text"
          name="password2"
          placeholder="Confirm Password"
        />
      </form>
      <button type="submit" className="btn btn-primary btn-block mb-5">
        Register
      </button>

      <Link className="link" to="/auth/register">
        Already registered?
      </Link>
    </>
  );
};
