import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Category from "./components/pages/category.jsx";
import Dashboard from "./components/pages/dashboard.jsx";
import Product from "./components/pages/product.jsx";
import FileSetting from "./components/pages/fileconfiguration.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import FileConfiguration from "./components/pages/fileconfiguration.jsx";
import Auth from "./components/pages/auth.jsx";
import PrivateRoute from "./components/routes/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    element: <PrivateRoute />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
        children: [
          {
            index: true,
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/category",
            element: <Category />,
          },
          {
            path: "/product",
            element: <Product />,
          },
          {
            path: "/fileconfiguration",
            element: <FileConfiguration />,
          },
        ],
      },
    ],
  },
  {
    index: true,
    path: "/auth",
    element: <Auth />,
  },
  // {
  //   path: "/login",
  //   element: <LoginPage />
  // },
  // {
  //   path: "/register",
  //   element: <RegisterPage />
  // }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
