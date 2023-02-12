import React, { useContext, useState } from "react";
import './login.css'
import * as authService from '../../services/authService'
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


const Login = () => {
  const navigate = useNavigate();
  const { userLogin } = useContext(AuthContext);
  const [error, setError] = useState();



  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform API call to verify login credentials
    // ...
    const { email, password } = Object.fromEntries(new FormData(e.target));

    try {
      authService.login(email,password)
        .then((authData) => {
          userLogin(authData);
          if (authData.message) {
            setError(authData.message)
            return
          }
          navigate('/my-resume')
        })
    } catch (error) {
      console.log(error);
    }

    // Clear form

  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
        />
      </div>
      {error && <p>{error}</p>}
      <button type="submit">Login</button>

    </form>
  );
};

export default Login;
