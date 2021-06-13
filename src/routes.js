import { Dashboard, Employees } from "pages";

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
];

export default routes;
