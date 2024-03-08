import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../redux/slices/orders";
import { useEffect } from "react";

const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders);
  console.log("oders in page", orders);

  const fatchOrders = async () => {
    try {
      let result = await dispatch(getOrders(1, 10));
      console.log("result  of fetching data", result);
      if (result) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fatchOrders();
  }, []);

  return (
    <>
      <div className="order-container">
        <div className="text-center h-full">
          <h1 className="text-2xl">Your Orders</h1>
        </div>
      </div>
    </>
  );
};

export default Orders;
