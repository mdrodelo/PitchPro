import React, { useState } from 'react';
import './AccountCreation.css'; // Import your CSS file

const AccountCreation = ({ history }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleCreateAccount = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email: newEmail,
          password: newPassword,
        }),
      });

      if (response.ok) {
        // Account creation successful
        console.log('Account creation successful');

        // Redirect to the login page
        history.push('/login');
      } else {
        // Handle account creation error, display error message, etc.
        console.error('Account creation failed');
      }

      // Clear input fields regardless of success or failure
      setFirstName('');
      setLastName('');
      setNewEmail('');
      setNewPassword('');
    } catch (error) {
      console.error('Error during account creation:', error);
    }
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