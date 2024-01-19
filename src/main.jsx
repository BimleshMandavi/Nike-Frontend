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
import Join from "./contents/auth/Join.jsx";

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
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
