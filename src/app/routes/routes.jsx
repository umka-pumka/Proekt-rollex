import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home/Home";
import Detail from "../../pages/detail/Detail";
import Login from "../../pages/user/login/Login";
import Register from "../../pages/user/regis/Register";
import NotFoundPage from "../../pages/notFoundPage/NotFoundPage";
import Cart from "../../processes/cart/Cart";
import Favorites from "../../processes/favorites/Favorites";

const menu = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/favorites",
    name: "Favorites",
    component: Favorites,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },

  {
    path: "/detail/:id",
    name: "Detail",
    component: Detail,
  },
];

const AppRoutes = () => {
  return (
    <Routes>
      {menu.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      ))}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
