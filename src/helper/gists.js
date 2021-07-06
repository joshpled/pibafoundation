/*

fetch("http://localhost:5001/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `query{ getEmployees{
          id name
        }}`,
      }),
    })
      .then((res) => res.json())
      .then(({ data }) => {
        debugger;
      });




    fetch("http://localhost:5001/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `mutation{
  createEmployee(newEmployee:{
    name: "Josh"
    position: "Software Engineer"
    email: "joshuapleduc@Gmail.com"
    phone: "7273163996"
    permissions: "Admin"
  }){
    id
    name
    position
    email
    phone
    permissions
  }
}`,
      }),
    })
      .then((res) => res.json())
      .then(({ data }) => {
        debugger;
        
      });







*/
