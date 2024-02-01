import React, { useState } from "react";

const Application = () => {
  return (
    <>
      <h1>Application</h1>
      <h2>Apply for a job</h2>
      <form>
        <label>
          Name:
          <input type="text" id="name" />
        </label>
        <br />
        <label htmlFor="bio">Bio:</label>
        <textarea id="bio" name="bio" />
        <br />
        <label>
          Job Location:
          <select id="job-location">
            <option value="">Select Location</option>
            <option value="New York">New York</option>
            <option value="London">London</option>
            <option value="Tokyo">Tokyo</option>
          </select>
        </label>
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
