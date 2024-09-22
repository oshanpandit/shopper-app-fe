import React, { useState } from 'react';
import { NavLink,useNavigate} from 'react-router-dom';
import { userSignUp } from '../http';
const SignUp = () => {
  
  const [error, setError] = useState('');
  const navigate=useNavigate();

  const handleSignUp = async(e) => {
    e.preventDefault();
    const formData=new FormData(e.target);
    const formObject=Object.fromEntries(formData.entries());
    if (formObject.password !==formObject.confirmPassword) {
      setError('Passwords do not match');
    } else {
      setError('');
      console.log(formObject);
      const response=await userSignUp(formObject);
      if(response.message=='user already exists'){
       setError('User already exists');
      }else{
         navigate('/login');
      }
    }
  };

  return (
    <div className="signup-container-wrapper">
      <div className="signup-container">
        <h2 className="signup-title">Sign Up</h2>
        <form onSubmit={handleSignUp} className="signup-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name='email'
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name='username'
              required
              placeholder="Enter your username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Enter your password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name='confirmPassword'
              required
              placeholder="Confirm your password"
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="btn-submit">
            Sign Up
          </button>
        </form>
        <p className="login-text">Already have an account? <NavLink to="/login">Login</NavLink></p>
      </div>
    </div>
  );
};

export default SignUp;
