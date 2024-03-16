import "./Bag.css";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart, listCart } from "../../redux/slices/cart";
import { useEffect } from "react";
import { getUser } from "../../redux/slices/auth";

const Bag = () => {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  const fetchUser = async () => {
    let result = await dispatch(getUser());
    if (result) {
      return true;
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleFetchListCart = async () => {
    try {
      let result = await dispatch(listCart(1, 10, user?.id));
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
    handleFetchListCart();
  }, []);

  const handleDel = async (id) => {
    let data = await dispatch(deleteCart(id));
    console.log(data);
    if (data) {
      return true;
    } else {
      return false;
    }
  };

  let subtotal = 0;
  let deliveryCoast = 1250;

  for (let i of cart) {
    let price =
      i && i.products && i.products[0] && i.products[0].productId?.price?.mrp;
    subtotal = subtotal + price;
  }
  let total = deliveryCoast + subtotal;

  return (
    <div className="bag-container pr-[35px]">
      <div className="bag-heading flex justify-center sm:justify-start">
        <p>Bag</p>
      </div>
      <div className="flex justify-center pb-10 border-b-2 gap-1 sm:hidden">
        <span>{cart.length} Items</span> | <span> ₹ {total}.00</span>
      </div>

      <div className="pt-8  pb-10">
        {cart && cart.length >= 0 ? (
          cart.map((data) => (
            <div className="bag-items pt-8 border-b-2 " key={data.id}>
              <div className="right-part">
                <div className="item-imgs h-[80px] w-[80px]">
                  <img
                    className="w-full h-full"
                    src={data?.products[0]?.productId?.image}
                  />
                </div>
                <div className="item-info pb-8">
                  <div className="left-part">
                    <span className="item-price">
                      MRP:₹ {data?.products[0]?.productId?.price?.mrp}
                    </span>
                  </div>
                  <div>
                    <div className="item-title">
                      <div className="flex">
                        {data?.products[0]?.productId?.title?.longTitle}
                      </div>
                    </div>
                    <div className="item-name">
                      {data?.products[0]?.productId?.title?.shortTitle}
                    </div>
                    <div className="item-color">
                      Colour: {data?.products[0]?.productId?.subCategory}
                    </div>
                    <div className="flex justify-between">
                      <div className="item-size">Size</div>
                      <div className="item-quant">
                        Quantity: {data?.products[0]?.qty}
                      </div>
                    </div>
                    <div className="item-btns gap-8">
                      <div className="item-fav">
                        <IoMdHeartEmpty className="btns" />
                      </div>
                      <div className="item-del">
                        <RiDeleteBinLine
                          className="btns"
                          onClick={() => handleDel(data?.id)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No item in your bag !</div>
        )}
      </div>
    </div>
  );
};

export default Bag;
