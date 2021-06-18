import { Dashboard, Employees, Events, Dogs, Volunteers, Login, Register } from "pages";

var routes = [
  {
    path: "/dashboard",
    layout: "/admin",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/employees",
    layout: "/admin",
    name: "Employees",
    component: Employees,
  },
  {
    path: "/events",
    layout: "/admin",
    name: "Events",
    component: Events,
  },
  {
    path: "/dogs",
    layout: "/admin",
    name: "Dogs",
    component: Dogs,
  },
  {
    path: "/volunteers",
    layout: "/admin",
    name: "Volunteers",
    component: Volunteers,
  },
  {
    path: "/login",
    layout: "/auth",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    layout: "/auth",
    name: "Register",
    component: Register,
  },
];

export default routes;
