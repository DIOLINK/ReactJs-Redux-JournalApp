import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLoginEmailPassword, startLoginGoogle } from '../../actions/auth';
import useForm from '../../hooks/useForm';
export const LoginPage = () => {
  const dispatch = useDispatch();
  const [formValues, handleInputChange, reset] = useForm({
    email: 'roger@gmail.com',
    password: '123456',
  });
  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password));
    reset();
  };

  const handleLoginWithGoogle = () => {
    dispatch(startLoginGoogle(email, password));
  };

  return (
    <>
      <h3 className="auth__title">Login...</h3>
      <form onSubmit={handleLogin}>
        <input
          className="auth__input"
          type="text"
          name="email"
          placeholder="Email..."
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          name="password"
          placeholder="Password..."
          value={password}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-primary btn-block">
          Login
        </button>
      </form>

      <div className="auth__social-networks">
        <p>Login with social networks</p>
        <div className="google-btn" onClick={handleLoginWithGoogle}>
          <div className="google-icon-wrapper">
            <img
              className="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="google button"
            />
          </div>
          <p className="btn-text">
            <b>Sign in with google</b>
          </p>
        </div>
      </div>
      <Link className="link" to="/auth/register">
        Register
      </Link>
    </>
  );
};
