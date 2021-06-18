import React, { useState } from "react";

function NewVolunteer() {
  const [volunteer, setVolunteer] = useState({
    name: "",
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
    console.log(volunteer);
  };
  const handleChange = (e) => {
    setVolunteer((prevValues) => {
      return { ...prevValues, [e.target.name]: e.target.value };
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={volunteer.name} onChange={handleChange} required="required" placeholder="First and Last Name" />
        <br></br>
        <label>Age:</label>
        <input type="number" name="age" value={volunteer.age} onChange={handleChange} required="required" />
        <br></br>
        <label>E-mail:</label>
        <input type="email" name="email" value={volunteer.email} onChange={handleChange} required="required" placeholder="example@email.com" />
        <br></br>
        <label>Phone:</label>
        <input type="tel" name="phone" value={volunteer.phone} onChange={handleChange} required="required" />
        <br></br>
        <label>Address:</label>
        <input type="text" name="address" value={volunteer.address} onChange={handleChange} required="required" />
        <br></br>
        <label>Address(line 2):</label>
        <input type="text" name="addressTwo" value={volunteer.addressTwo} onChange={handleChange} />
        <br></br>
        <label>Zipcode:</label>
        <input type="number" name="zipcode" value={volunteer.zipcode} onChange={handleChange} required="required" />
        <br></br>
        <label>City:</label>
        <input type="text" name="city" value={volunteer.city} onChange={handleChange} required="required" />
        <br></br>
        <label>State:</label>
        <input type="text" name="state" value={volunteer.state} onChange={handleChange} required="required" />
        <br></br>
        <label>Sign:</label>
        <input type="text" name="sign" value={volunteer.sign} onChange={handleChange} required="required" />
        <br></br>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default NewVolunteer;
