import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProduct } from "../redux/slices/productSlice";
import PropTypes from "prop-types";
const SearchBox = ({ handleCToogle }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(9);
  const [filter, setFilter] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setFilter({ "title.longTitle": { $regex: searchTerm, $options: "i" } });
      handleCToogle();
    }
  };

  const fatchProduct = async () => {
    let result = await dispatch(getProduct(page, limit, filter));
    if (result) {
      navigate("/products");
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    fatchProduct();
  }, [filter]);
  return (
    <>
      <div className="searchBar">
        <input
          type="text"
          id="searchInput"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
          style={{
            height: "40px",

            borderRadius: "20px",
            border: "1px solid transparent",
            background: "#eaeaea",
            padding: "5px 5px 5px 9px",
            width: "203px",
            boxSizing: "border-box",
            marginLeft: "auto",
            marginTop: "6px",
          }}
        />
      </div>
    </>
  );
};
SearchBox.propTypes = {
  handleCToogle: PropTypes.func.isRequired, // PropTypes validation for handleCloseToogle function
};
export default SearchBox;
