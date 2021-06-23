import React, { useState } from "react";

function NewAdopter() {
  const [adopter, setAdopter] = useState({
    fullname: "",
    age: "",
    email: "",
    phone: "",
    address: "",
    addressTwo: "",
    zipcode: "",
    city: "",
    state: "",
    sign: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(adopter);
  };
  const handleChange = (e) => {
    setAdopter((prevValues) => {
      return { ...prevValues, [e.target.name]: e.target.value };
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Full Name:</label>
        <input type="text" name="fullname" value={adopter.fullname} onChange={handleChange} required="required" placeholder="First and Last Name" />
        <br></br>
        <label>Age:</label>
        <input type="number" name="age" value={adopter.age} onChange={handleChange} required="required" />
        <br></br>
        <label>E-mail:</label>
        <input type="email" name="email" value={adopter.email} onChange={handleChange} required="required" placeholder="example@email.com" />
        <br></br>
        <label>Phone:</label>
        <input type="tel" name="phone" value={adopter.phone} onChange={handleChange} required="required" />
        <br></br>
        <label>Address:</label>
        <input type="text" name="address" value={adopter.address} onChange={handleChange} required="required" />
        <br></br>
        <label>Address(line 2):</label>
        <input type="text" name="addressTwo" value={adopter.addressTwo} onChange={handleChange} />
        <br></br>
        <label>Zipcode:</label>
        <input type="number" name="zipcode" value={adopter.zipcode} onChange={handleChange} required="required" />
        <br></br>
        <label>City:</label>
        <input type="text" name="city" value={adopter.city} onChange={handleChange} required="required" />
        <br></br>
        <label>State:</label>
        <input type="text" name="state" value={adopter.state} onChange={handleChange} required="required" />
        <br></br>
        <label>Sign:</label>
        <input type="text" name="sign" value={adopter.sign} onChange={handleChange} required="required" />
        <br></br>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default NewAdopter;
