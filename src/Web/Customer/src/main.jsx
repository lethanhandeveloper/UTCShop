import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

const router = createBrowserRouter([
  {
    // element: <PrivateRoute />,
    // errorElement: <ErrorPage />,
    // children: [
    //   {
    //     path: "/",
    //     element: <App />,
    // children: [
    //   {
    //     index: true,
    //     path: "/dashboard",
    //     element: <Dashboard />,
    //   },
    //   {
    //     path: "/category",
    //     element: <Category />,
    //   },
    //   {
    //     path: "/product",
    //     element: <Product />,
    //   },
    //   {
    //     path: "/fileconfiguration",
    //     element: <FileConfiguration />,
    //   },
    // ],
    //     },
    //   ],
    // },
    // {
    //   index: true,
    //   path: "/auth",
    //   element: <Auth />,
    // },
    // {
    //   path: "/login",
    //   element: <LoginPage />
    // },
    // {
    path: "/",
    element: <App />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
