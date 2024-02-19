import React from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css'; // Import your CSS file

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const history = useHistory();

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Login button pressed with email:', email, 'and password:', password);
    // Add your login API call or authentication logic
  };

  const handleCreateAccount = () => {
    // Redirect to the account creation page
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