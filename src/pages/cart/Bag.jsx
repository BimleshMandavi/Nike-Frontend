import "./Bag.css";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart, listCart } from "../../redux/slices/cart";
import { useEffect, useState } from "react";

const Bag = () => {
  const dispatch = useDispatch();

  const [refresh, setRefresh] = useState(false);
  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  console.log("user", cart);

  const handleFetchListCart = async () => {
    try {
      if (!user?.id) {
        return;
      }

      let result = await dispatch(listCart(user?.id));
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
  }, [refresh]);

  const handleFav = () => {
    console.log("item has been added to wishlist");
  };
  const handleDel = async (id) => {
    let data = await dispatch(deleteCart(id));
    console.log(data);
    if (data) {
      setRefresh(!refresh);
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="bag-container">
      <div className="bag-heading">
        <p>Bag</p>
      </div>
      <div
        style={{
          maxHeight: "100vh",
          overflowY: "auto",
        }}
      >
        {cart && cart.length > 0 ? (
          cart.map((data) => (
            <div
              className="bag-items"
              key={data.id}
              style={{
                padding: "10px 0px 10px 0px",
                borderBottom: "2px solid grey",
              }}
            >
              <div className="right-part">
                <div className="item-imgs">
                  <img src={data?.products[0]?.productId?.image} />
                </div>
                <div className="item-info">
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
                      <IoMdHeartEmpty className="btns" onClick={handleFav} />
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
              <div className="left-part">
                <span className="item-price">
                  MRP:{data?.products[0]?.productId?.price?.mrp}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div>No item in your bag !</div>
        )}
      </div>
      <div className="more-product">
       
      </div>
    </div>
  );
};

export default Bag;
