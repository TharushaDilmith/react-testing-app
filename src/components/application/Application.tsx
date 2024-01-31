import React, { useState } from "react";

const Application = () => {
  return (
    <form>
      <label>
        Name:
        <input type="text" id="name" />
      </label>
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
        <input type="checkbox" id="terms" />I agree to the terms and conditions
      </label>
      <br />
      <button type="submit">Confirm</button>
    </form>
  );
};

export default Application;
