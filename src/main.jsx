import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import BagItems from "./pages/cart/BagItems.jsx";
import SignIn from "./contents/auth/SignIn.jsx";
import { Provider } from "react-redux";
import Products from "./pages/products/Products.jsx";
import PreBag from "./pages/cart/PreBag.jsx";
import Checkout from "./components/Checkout.jsx";
import Payment from "./components/Payment.jsx";
import Favourites from "./components/Favourites.jsx";
import store from "./redux/store/store.js";
import Join from "./contents/register/Join.jsx";
import { Toaster } from "react-hot-toast";
import Shipping from "./components/Shiping.jsx";
import Billing from "./components/Billing.jsx";
import Profile from "./components/userPorfile/Profile.jsx";
import Orders from "./components/Orders.jsx";
import OrderView from "./components/OrderView.jsx";

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
        path: "/favourites",
        element: <Favourites />,
      },

      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/pre-cart/:id",
        element: <PreBag />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/order-info/:id",
        element: <OrderView />,
      },
    ],
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/shipping",
    element: <Shipping />,
  },
  {
    path: "/billing",
    element: <Billing />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <Join />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster position="top-center" />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
