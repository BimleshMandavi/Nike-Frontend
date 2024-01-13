import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home.jsx";
import BagItems from "./components/BagItems.jsx";
import SignUp from "./contents/auth/SignUp.jsx";
import { Provider } from "react-redux";
import nikeStore from "./constant/store/index.js";
import Products from "./contents/Products.jsx";
import PreBag from "./components/PreBag.jsx";
import Checkout from "./components/Checkout.jsx";
import Payment from "./components/Payment.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/cart",
        element: <BagItems />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/pre-cart",
        element: <PreBag />,
      },
    ],
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={nikeStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
