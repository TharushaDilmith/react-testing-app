import React, { useState } from "react";

const Application = () => {
  return (
    <>
      <h1>Application</h1>
      <h2>Apply for a job</h2>
      <p>Complete the form below to apply for a job</p>
      <img src="https://via.placeholder.com/150" alt="placeholder" />
      <form>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" placeholder="Enter your name" value="John Doe" onChange={() => {}} />
        <br />
        <label htmlFor="bio">Bio:</label>
        <textarea id="bio" name="bio" />
        <br />
        <label htmlFor="job-location">Job Location: </label>
        <select id="job-location">
          <option value="">Select Location</option>
          <option value="New York">New York</option>
          <option value="London">London</option>
          <option value="Tokyo">Tokyo</option>
        </select>
        <br />
        <label>
          <input type="checkbox" id="terms" />I agree to the terms and
          conditions
        </label>
        <br />
        <button type="submit">Confirm</button>
      </form>
    </>
  );
};

export default Application;
