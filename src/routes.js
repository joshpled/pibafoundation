import { Dashboard, Employees, Events, Dogs, Volunteers, Login, Register } from "pages";

var routes = [
  {
    path: "/dashboard",
    layout: "/admin",
    name: "Dashboard",
    icon: "home",
    component: Dashboard,
  },
  {
    path: "/dogs",
    layout: "/admin",
    name: "Dogs",
    icon: "dog",
    component: Dogs,
  },
  {
    path: "/employees",
    layout: "/admin",
    name: "Employees",
    icon: "user-clock",
    component: Employees,
  },
  {
    path: "/volunteers",
    layout: "/admin",
    name: "Volunteers",
    icon: "hands-helping",
    component: Volunteers,
  },
  {
    path: "/events",
    layout: "/admin",
    name: "Events",
    icon: "calendar-plus",
    component: Events,
  },
  {
    path: "/login",
    layout: "/auth",
    name: "Login",
    icon: "home",
    component: Login,
  },
  {
    path: "/register",
    layout: "/auth",
    name: "Register",
    icon: "home",
    component: Register,
  },
];

export default routes;
