import React, { useRef } from "react";

function NewVolunteer() {
  const [name, age, email, phone, address, addressTwo, zipcode, city, state, sign] = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" ref={name} />
        <br></br>
        <label>Age:</label>
        <input type="number" ref={age} />
        <br></br>
        <label>E-mail:</label>
        <input type="email" ref={email} />
        <br></br>
        <label>Phone:</label>
        <input type="tel" ref={phone} />
        <br></br>
        <label>Address:</label>
        <input type="text" ref={address} />
        <br></br>
        <label>Address(line 2):</label>
        <input type="text" ref={addressTwo} />
        <br></br>
        <label>Zipcode:</label>
        <input type="number" ref={zipcode} />
        <br></br>
        <label>City:</label>
        <input type="text" ref={city} />
        <br></br>
        <label>State:</label>
        <input type="text" ref={state} />
        <br></br>
        <label>Sign:</label>
        <input type="text" ref={sign} />
        <br></br>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default NewVolunteer;
