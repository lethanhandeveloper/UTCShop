import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import Home from "./components/pages/home/home.jsx";
import ViewByCategory from "./components/pages/viewbycategory/viewbycategory.jsx";
import Cart from "./components/pages/cart/cart.jsx";
import LoginAndSignUp from "./components/pages/account/loginandsignup.jsx";
import Login from "./components/pages/auth/login.jsx";
import Auth from "./components/pages/auth/auth.jsx";
import Register from "./components/pages/auth/signup.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/viewbycategory", element: <ViewByCategory /> },
      { path: "/cart", element: <Cart /> },
      { path: "/account/login", element: <LoginAndSignUp /> },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
