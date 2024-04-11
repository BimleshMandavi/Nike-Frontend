import { useDispatch, useSelector } from "react-redux";
import { listOrders } from "../../redux/slices/orders";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import "./order.css";
import { useNavigate } from "react-router-dom";
import UserNav from "../userPorfile/UserNav";

const Orders = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { order } = useSelector((state) => state.order);
  const { user } = useSelector((state) => state.auth);
  console.log("orders in page", order);

  const fatchOrders = async () => {
    try {
      if (!user?.id) {
        return;
      }
      setLoading(true);
      let result = await dispatch(listOrders(1, 100, user?.id));
      if (result) {
        setLoading(false);
        return true;
      } else {
        setLoading(true);
        return false;
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleOrderInfo = (id) => {
    navigate(`/order-info/${id}`);
  };

  useEffect(() => {
    fatchOrders();
  }, []);

  return (
    <>
      <div className="main_oreder px-5 bg-slate-400 min-h-[85vh]">
        <div className="container_order">
          <div className="Myorders">
            <div className="myorder pt-4 flex gap-6 text-center justify-between border-b-2 text-xl overflow-x-auto pb-4">
              <h1>My Orders ( {order.length} )</h1>
              <UserNav />
            </div>
            {loading ? (
              <div className="flex w-full h-[80vh] justify-center items-center">
                <div className="flex gap-10">
                  <CircularProgress className="size-10" />
                  {/* <p>Loading...</p> */}
                </div>
              </div>
            ) : (
              <div className="pt-10">
                <div className="items sm:flex sm:justify-center sm:flex-col">
                  {order && order.length > 0 ? (
                    order.map((item, index) => (
                      <div key={index}>
                        {item &&
                          item[0]?.products &&
                          item[0]?.products.length > 0 &&
                          item[0]?.products.map((item1, index) => (
                            <div
                              key={index}
                              className="singleitem w-full  py-8 sm:flex sm:justify-center"
                            >
                              <div className="orderDetails block sm:flex sm:w-[970px]">
                                <div className="image sm:h-[283px] sm:w-[225px]">
                                  <img
                                    className="w-full h-full p-2"
                                    src={
                                      item1 &&
                                      item1.productId &&
                                      item1.productId.image
                                    }
                                  />
                                </div>
                                <div className="descripotin sm:relative pl-4 pb-6 sm:pl-10">
                                  <div className="title">
                                    <p className="text-lg pt-3">
                                      {item1 &&
                                        item1.productId &&
                                        item1.productId.title &&
                                        item1.productId.title.shortTitle}
                                    </p>
                                    <p className="text-sm">
                                      colour :
                                      {item1 &&
                                        item1?.productId &&
                                        item1?.productId?.colour}
                                    </p>
                                    <p className="text-lg">
                                      price : ₹
                                      {item1 &&
                                        item1?.productId &&
                                        item1?.productId?.title &&
                                        item1?.productId?.price?.mrp.toFixed(2)}
                                    </p>
                                  </div>
                                  <div className="pb-3">
                                    (Order ID - {item && item[0]?.id})
                                  </div>
                                  <div className="sm:flex sm:justify-between  flex-col">
                                    <div className="order_status ">
                                      {item[0]?.status}
                                    </div>
                                    <div className="oderrinfo sm:left-[90%] sm:bottom-[20%] pt-2 sm:pt-8">
                                      <button
                                        className="text-black"
                                        onClick={() =>
                                          handleOrderInfo(item[0]?.id)
                                        }
                                      >
                                        Order Info
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    ))
                  ) : (
                    <div className="text-2xl text-center pt-10">
                      <h2>You don't have any orders yet! </h2>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
