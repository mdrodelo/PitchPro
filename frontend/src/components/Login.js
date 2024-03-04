import React from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css'; // Import your CSS file

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const history = useHistory();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/users/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Login successful
        console.log('Login successful');



        // Redirect or perform other actions after successful login
        // For example, you can redirect to the home page:
        history.push('/');
      } else {
        // Handle login error, display error message, etc.
        console.error('Login failed');
      }
      // Clear input fields
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const handleCreateAccount = () => {
    history.push('/account-creation');
  };

  return (
    <div className="login-container">
      <h2>Log Into PitchPro</h2>
      <form>
        <label className="label-input">
          <input
            type="email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </label>
        <label className="label-input">
          <input
            type="password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </label>
        <button type="button" className="login-button" onClick={handleLogin}>
          Log In
        </button>
        <button type="button" className="create-account-button" onClick={handleCreateAccount}>
          Create new Account
        </button>
      </form>
    </div>
  );
};

export default Login;