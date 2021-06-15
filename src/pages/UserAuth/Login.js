import React from "react";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Submitted");
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>Username:</label>
      <input type="text" />
      <label>Password:</label>
      <input type="password" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Login;
