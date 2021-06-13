import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";
import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";

function App() {
  const userExist = useState(false);
  if (userExist) {
    return <Redirect from="/" to="/auth/login" />;
  }
  return (
    <>
      <Redirect from="/" to="/admin/dashboard" />
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
    </>
  );
}

export default App;
