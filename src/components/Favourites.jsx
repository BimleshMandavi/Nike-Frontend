import { useNavigate } from "react-router-dom";

const Favourites = () => {
  const items = {
    id: "001",
    image: "img1.png",
    company: "Carlton London",
    category: "men's T shirt",
    original_price: 1045,
    current_price: 606,
    discount_percentage: 42,
    return_period: 14,
    delivery_date: "10 Oct 2023",
    rating: { stars: 4.5, count: 1400 },
  };

  const navigate = useNavigate();

  const handelAddToBag = () => {
    navigate("/cart");
  };

  return (
    <div className="fav-container">
      <div
        className="fav-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "48px 48px 12px",
        }}
      >
        <div className="local-fav-nav">
          <h2 style={{ fontSize: "24px" }}>Favourites</h2>
        </div>
        <div className="local-fav-nav">
          <button
            style={{
              padding: "8px 24px",
              fontSize: "16px",
              borderRadius: "20px",
              color: "rgb(17, 17, 17)",
            }}
          >
            Edit
          </button>
        </div>
      </div>
      <div className="fav-body" style={{ padding: "0px 32px", width: "550px" }}>
        <div
          className="fav-item-img"
          style={{ height: "500px", width: "500px" }}
        >
          <img src={items.image} style={{ height: "100%", width: "100%" }} />
        </div>
        <div className="fav-item">
          <div
            className="fav-item-info"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div className="fav-item-name">
              <p>{items.company}</p>
              <p>{items.category}</p>
            </div>
            <div>
              <span className="fav-item-price-info">
                MRP:₹{items.current_price}
              </span>
            </div>
          </div>
        </div>
        <div className="add-to-cart" style={{ padding: "20px 0px 40px" }}>
          <button
            style={{
              padding: "8px 24px",
              fontSize: "16px",
              borderRadius: "20px",
            }}
            onClick={handelAddToBag}
          >
            Add to Bag
          </button>
        </div>
        <div className="next-fav-items">
          <h3>Find Your Next Favourite</h3>
        </div>
      </div>
    </div>
  );
};

export default Favourites;
