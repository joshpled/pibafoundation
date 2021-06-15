import React from "react";

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register Submitted");
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>Username:</label>
      <input type="text" />
      <label>Password:</label>
      <input type="password" />
      <label>Confirm Password:</label>
      <input type="password" />
      <label>Authorization Code:</label>
      <input type="text" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Register;
