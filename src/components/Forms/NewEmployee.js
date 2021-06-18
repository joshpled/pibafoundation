import React from "react";

function NewEmployee() {
  return (
    <div>
      <form>
        <lable>Name:</lable>
        <input type="text" />
        <br></br>
        <lable>Age:</lable>
        <input type="number" />
        <br></br>
        <lable>E-mail:</lable>
        <input type="email" />
        <br></br>
        <lable>Phone:</lable>
        <input type="tel" />
        <br></br>
        <lable>Address:</lable>
        <input type="text" />
        <br></br>
        <lable>Address(line 2):</lable>
        <input type="text" />
        <br></br>
        <lable>Zipcode:</lable>
        <input type="number" />
        <br></br>
        <lable>City:</lable>
        <input type="text" />
        <br></br>
        <lable>State:</lable>
        <input type="text" />
        <br></br>
        <lable>Sign:</lable>
        <input type="text" />
        <br></br>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default NewEmployee;
