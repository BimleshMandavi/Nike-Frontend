import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PreBag = () => {
  const navigate = useNavigate();
  const handleAddtoFav = () => {
    console.log("Item added to Fav");
  };
  const handleAddToBag = () => {
    navigate("/cart");
  };
  const items = {
    id: "001",
    image: "img1.png",
    company: "Carlton London",
    item_name: "Rhodium-Plated CZ Floral Studs",
    original_price: 1045,
    current_price: 606,
    discount_percentage: 42,
    return_period: 14,
    delivery_date: "10 Oct 2023",
    rating: { stars: 4.5, count: 1400 },
  };

  return (
    <div className="main-pre-container " style={{ overflow: "hidden" }}>
      <div
        className="pre-bag-container"
        style={{
          display: "flex",
          justifyContent: "center",
          paddingLeft: "450px",
          marginTop: "50px",
        }}
      >
        <div
          className="product-right-part"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="product-img" style={{}}>
            <img src={items.image} style={{ height: "100%", width: "100%" }} />
          </div>
        </div>
        <div className="product-left-part" style={{ width: "180vw" }}>
          <div
            className="product-info"
            style={{ width: "30%", margin: " 0 0", padding: "0 0 0 20px" }}
          >
            <h1>{items.item_name}</h1>
            <div className="product-price">MRP : ₹{items.current_price}</div>
            <span>incl. of taxes (Also includes all applicable duties)</span>
            <div className="product-color">
              <p>color :</p>
            </div>
            <div className="product-size">
              <p>Select Size</p>
              <div className="size-grid">
                <div
                  className="grid1"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3,1fr)",
                    gap: "7px",
                    margin: "8px",
                    background: "rgb(255, 255, 255)",
                    boxShadow: "rgb(229, 229, 229) 0px 0px 0px 1px",
                    width: "100%",
                  }}
                >
                  <button style={{ cursor: "pointer" }}>UK 6</button>
                  <button style={{ cursor: "pointer" }}>UK 6.5</button>
                  <button style={{ cursor: "pointer" }}>UK 7</button>
                  <button style={{ cursor: "pointer" }}>UK 7.5</button>
                  <button style={{ cursor: "pointer" }}>UK 8</button>
                  <button style={{ cursor: "pointer" }}>UK 8.5</button>
                  <button style={{ cursor: "pointer" }}>UK 9</button>
                  <button style={{ cursor: "pointer" }}>UK 9.5</button>
                  <button style={{ cursor: "pointer" }}>UK 10</button>
                  <button style={{ cursor: "pointer" }}>UK 10.5</button>
                  <button style={{ cursor: "pointer" }}>UK 11</button>
                  <button style={{ cursor: "pointer" }}>UK 11.5</button>
                  <button style={{ cursor: "pointer" }}>UK 12</button>
                </div>
              </div>
            </div>
            <div
              className="product-btns"
              style={{
                margin: "12px 0 0",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "",
              }}
            >
              <div className="add-product">
                <button
                  style={{
                    background: "black",
                    color: "white",
                    width: "100%",
                    height: "48px",
                    borderRadius: "30px",
                    cursor: "pointer",
                  }}
                  onClick={handleAddToBag}
                >
                  Add to Bag
                </button>
              </div>
              <div className="fav-product" style={{ marginTop: "12px" }}>
                <button
                  style={{
                    background: "",
                    color: "black",
                    width: "100%",
                    height: "48px",
                    borderRadius: "30px",
                    cursor: "pointer",

                    borderColor: "#CACACB",
                  }}
                  onClick={handleAddtoFav}
                >
                  Favourite <FaRegHeart />
                </button>
              </div>
            </div>
            <div className="product-discreption">
              <article style={{ margin: "18px 0 0" }}>
                Quicker than 1, 2, 3—the original hoops shoe lets you step in
                and get going. Its easy-entry EasyOn system gives you a
                hands-free experience. Crisp leather dons the cleanest colour
                for the ultimate wearability. Yeah, its everything you love and
                then some.
              </article>
            </div>
            <div className="product-details"></div>
            <div className="color-fit"></div>
            <div className="delivery-info"></div>
            <div className="review-info"></div>
            <div className="pro-info"></div>
            <div className="more-info"></div>
          </div>
        </div>
      </div>
      <div className="other-products">
        <h1 style={{ fontSize: "30px" }}>You Might Also Like</h1>
      </div>
    </div>
  );
};

export default PreBag;
