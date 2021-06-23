import React, { useState } from "react";

function NewEmployee() {
  const [employee, setEmployee] = useState({
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
    console.log(employee);
  };
  const handleChange = (e) => {
    setEmployee((prevValues) => {
      return { ...prevValues, [e.target.name]: e.target.value };
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Full Name:</label>
        <input type="text" name="fullname" value={employee.fullname} onChange={handleChange} required="required" placeholder="First and Last Name" />
        <br></br>
        <label>Age:</label>
        <input type="number" name="age" value={employee.age} onChange={handleChange} required="required" />
        <br></br>
        <label>E-mail:</label>
        <input type="email" name="email" value={employee.email} onChange={handleChange} required="required" placeholder="example@email.com" />
        <br></br>
        <label>Phone:</label>
        <input type="tel" name="phone" value={employee.phone} onChange={handleChange} required="required" />
        <br></br>
        <label>Address:</label>
        <input type="text" name="address" value={employee.address} onChange={handleChange} required="required" />
        <br></br>
        <label>Address(line 2):</label>
        <input type="text" name="addressTwo" value={employee.addressTwo} onChange={handleChange} />
        <br></br>
        <label>Zipcode:</label>
        <input type="number" name="zipcode" value={employee.zipcode} onChange={handleChange} required="required" />
        <br></br>
        <label>City:</label>
        <input type="text" name="city" value={employee.city} onChange={handleChange} required="required" />
        <br></br>
        <label>State:</label>
        <input type="text" name="state" value={employee.state} onChange={handleChange} required="required" />
        <br></br>
        <label>Sign:</label>
        <input type="text" name="sign" value={employee.sign} onChange={handleChange} required="required" />
        <br></br>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default NewEmployee;
