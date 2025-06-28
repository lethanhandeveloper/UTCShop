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
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
