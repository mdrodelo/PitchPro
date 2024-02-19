import React, { useState } from 'react';
import './AccountCreation.css'; // Import your CSS file

const AccountCreation = ({ history }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleCreateAccount = () => {
    // Implement your account creation logic here
    console.log(
      'Create account button pressed with first name:',
      firstName,
      'last name:',
      lastName,
      'email:',
      newEmail,
      'and password:',
      newPassword
    );
    // Add your account creation API call or authentication logic

    // Redirect to the login page after account creation
    history.push('/login');
  };

  return (
    <div className="account-creation-container">
      <h2>Create a New Account</h2>
      <form>
        <div className="row">
          <div className="label-input">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter first name"
              className="input-field"
            />
          </div>
          <div className="label-input">
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter last name"
              className="input-field"
            />
          </div>
        </div>
        <div className="label-input">
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            placeholder="Enter new email"
            className="input-field"
          />
        </div>
        <div className="label-input">
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter new password"
            className="input-field"
          />
        </div>
        <button type="button" className="create-account-button" onClick={handleCreateAccount}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default AccountCreation;