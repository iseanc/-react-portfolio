import React, { useState } from 'react';

// import helper function to check for valid email address
import { checkMessage, validateEmail } from '../utils/helpers';

export default function Contact() {
  // state variables for form fields with initial values = empty strings
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on input type, set the state of email, username, or message
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing default behavior of the form submit (refreshes the page)
    e.preventDefault();

    // Display error if email is not valid or userName is empty.
    if (!userName) {
      setErrorMessage('Name cannot be empty');
      // exit code block if something is wrong so user can correct it
      return;
      // Display error if message is not valid.
    }
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      // exit code block if something is wrong so user can correct it
      return;
      // Display error if message is not valid.
    }
    if (!checkMessage(message)) {
      setErrorMessage(
        `Message cannot be empty`
      );
      return;
    }
    alert(`Hello ${userName}`);

    // If everything is OK, clear input after a successful submission.
    setUserName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <p>Hello {userName}</p>
      <form className="form">
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="message"
          placeholder="Message"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}