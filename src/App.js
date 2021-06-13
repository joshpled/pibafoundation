import React from "react";
import { Redirect, Route } from "react-router-dom";
import AdminLayout from "layouts/Admin.js";

function App() {
  return (
    <>
      <Redirect from="/" to="/admin/dashboard" />
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
    </>
  );
}

export default App;
