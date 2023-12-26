"use client"
import React, { useState } from 'react';

const Hero = () => {
  // State variables
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [role, setRole] = useState('');

  // Event handlers for input changes
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  return (
    <div >
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={handleAgeChange}
        />
      </div>
      <div>
        <label htmlFor="role">Role:</label>
        <input
          type="text"
          id="role"
          value={role}
          onChange={handleRoleChange}
        />
      </div>
    </div>
  );
};

export default Hero;
