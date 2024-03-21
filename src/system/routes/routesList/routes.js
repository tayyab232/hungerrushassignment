import Login from "../../../views/login/login";
import Brands from "../../../views/brands/brands";

const routes = [
  {
    path: "/",
    name: "Brands",
    component: <Brands />,
    protected: true,
    hasSideBar: true,
  },

  {
    path: "/login",
    name: "Login",
    component: <Login />,
    protected: false,
    hasSideBar: false,
  },
];

export default routes;
