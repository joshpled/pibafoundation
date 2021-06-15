import React, { useRef } from "react";

function NewDog() {
  const name = useRef("");
  const age = useRef("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" ref={name} /> <br></br>
      <label>Age:</label>
      <input type="number" ref={age} />
      <br></br>
      <button type="submit">Submit</button>
    </form>
  );
}

export default NewDog;
