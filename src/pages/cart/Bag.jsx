import "./Bag.css";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart, listCart, updateCart } from "../../redux/slices/cart";
import { useEffect, useState } from "react";
import { getUser } from "../../redux/slices/auth";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Bag = () => {
  const dispatch = useDispatch();
  const [refresh, setRefresh] = useState(false);

  const [size, setSize] = useState(1);
  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  console.log("cart", cart);
  const fetchUser = async () => {
    let result = await dispatch(getUser());
    if (result) {
      return true;
    }
  };

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
  const id = cart && cart.length > 0 && cart[0] && cart[0]?.id;

  for (let i of cart) {
    let price =
      i && i.products && i.products[0] && i.products[0].productId?.price?.mrp;
    subtotal = subtotal + price;
  }
  let total = deliveryCoast + subtotal;

  const handleQtyChange = async (event) => {
    const data = {
      products: [
        {
          productId: event.target.name,
          qty: event.target.value,
        },
      ],
    };
    let result = await dispatch(updateCart(id, data));
    if (result) {
      console.log("result", result);
      setRefresh(!refresh);
      return result;
    }
  };
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const qtyOptions = Array.from({ length: 10 }, (_, index) => index + 1);
  const sizeOptions = Array.from({ length: 12 }, (_, index) => index + 1);

  useEffect(() => {
    handleFetchListCart();
    fetchUser();
  }, [refresh]);

  return (
    <div className="bag-container pr-[35px]">
      <div className="bag-heading flex justify-center sm:justify-start">
        <p>Bag</p>
      </div>
      <div className="flex justify-center pb-10 border-b-2 gap-1 sm:hidden">
        <span>{cart.length} Items</span> | <span> ₹ {total.toFixed(2)}</span>
      </div>

      <div className="pt-8  pb-10">
        {cart && cart.length > 0 ? (
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
                      MRP: ₹
                      {data?.products[0]?.productId?.price?.mrp.toFixed(2)}
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
                    <div className="flex justify-between pt-4">
                      <div className="item-size">
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                          <InputLabel id="demo-select-small-label">
                            Size
                          </InputLabel>
                          <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={size}
                            label="size"
                            onChange={handleSizeChange}
                          >
                            {sizeOptions.map((option1) => (
                              <MenuItem key={option1} value={option1}>
                                {option1}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </div>
                      <div className="item-quant">
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                          <InputLabel id="demo-select-small-label">
                            Qty
                          </InputLabel>
                          <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={data?.products[0]?.qty}
                            label="Qty"
                            name={data.id}
                            onChange={handleQtyChange}
                          >
                            {qtyOptions.map((option) => (
                              <MenuItem key={option} value={option}>
                                {option}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
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
          <div className="text-xl text-center">
            <h2>There are no items in your bag !</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bag;
