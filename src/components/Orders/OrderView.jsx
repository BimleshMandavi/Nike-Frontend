import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cencelOrder, getSingleOrder } from "../../redux/slices/orders";
import { useEffect, useState } from "react";
import UserNav from "../userPorfile/UserNav";
import { getSingleProduct } from "../../redux/slices/productSlice";
import Steaper from "./Steaper";

const OrderView = () => {
  const singleProduct = useSelector((state) => state.product);
  const { user } = useSelector((state) => state.auth);
  console.log("user data", user);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [singleOrder, setSingleOrder] = useState("");

  console.log("singleOrder", singleOrder);
  console.log("single product", singleProduct);

  const fatchingSingleOrder = async () => {
    try {
      let result = await dispatch(getSingleOrder(id));
      if (result) {
        setSingleOrder(result.data);
        return true;
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fatchingSingleOrder();
  }, [id]);

  useEffect(() => {
    if (
      singleOrder &&
      singleOrder.products &&
      singleOrder.products.length > 0
    ) {
      const prId = singleOrder.products[0].productId;
      console.log("product id", prId);
      if (prId) {
        getOrderProduct(prId);
      }
    }
  }, [singleOrder]);

  const getOrderProduct = async (prId) => {
    try {
      let result = await dispatch(getSingleProduct(prId));
      if (result) {
        return true;
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleOrderCencel = async () => {
    let result = await dispatch(cencelOrder(id));
    if (result) {
      console.log(result, "order cancelled");
      return true;
    }
  };

  return (
    <div className="bg-[#f1f3f6] min-h-[100vh]">
      <div className="my-5 pt-5">
        <UserNav />
      </div>
      <div className="user-details mx-10 pt-8 bg-[#ffffff] gap-10 sm:flex  ">
        <div className="address px-10 ">
          <h3 className="text-xl"> Delivery Address :</h3>
          <div className="text-lg gap-2 flex">
            <h3>{user?.firstName}</h3>
            <h3>{user?.lastName}</h3>
          </div>
          <h3 className="text-lg">{user?.email}</h3>
          <h3 className="text-lg">{user?.address?.[0]?.phone}</h3>
          <h3 className="text-lg">{user?.address?.[0]?.panNumber}</h3>
          <div className=" flex gap-2">
            <p className="text-lg">{user?.address?.[0]?.zipcode}</p>,
            <p className="text-lg"> {user?.address?.[0]?.city}</p>,
            <p className="text-lg">{user?.address?.[0]?.state}</p>,
            <p className="text-lg">{user?.address?.[0]?.locality}</p>
          </div>
        </div>
        <div className="ml-5 w-full">
          <Steaper />
        </div>
      </div>
      <div className=" sm:flex sm:justify-center sm:flex-col">
        <div>
          <div className=" w-full  py-8 sm:flex sm:justify-evenly">
            <div className="orderDetails block sm:flex sm:w-[970px]">
              <Link
                to={"/products"}
                className="image sm:h-[283px] sm:w-[225px]"
              >
                <img
                  className="w-full h-full p-2"
                  src={singleProduct.singleProduct.image}
                />
              </Link>
              <div className="descripotin sm:relative p-4  sm:ml-11">
                <div className="title">
                  <p className="text-lg pt-3">
                    {singleProduct?.singleProduct?.title?.shortTitle}
                  </p>
                  <p className="text-sm">
                    colour : {singleProduct?.singleProduct?.subCategory}
                  </p>
                  <p className="text-lg">
                    price : ₹{" "}
                    {singleProduct?.singleProduct?.price?.mrp.toFixed(2)}
                  </p>
                </div>
                <div className="pb-3">
                  (Order ID - {singleProduct.singleProduct.id})
                </div>
                <div className="sm:flex sm:justify-between sm:mt-11">
                  <div className="flex justify-between gap-3 mt-4">
                    <div className="order_status ">{singleOrder.status}</div>
                    <div className="order_status ">
                      <button
                        className="text-red-600 border-black"
                        onClick={handleOrderCencel}
                      >
                        Cencel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderView;
