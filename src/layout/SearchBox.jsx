import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";

const SearchBox = ({ handleCToogle }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleKeyPress = (e,action) => {
    if (e.key === "Enter") {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      handleCToogle();
      action.resetForm();
    }
  };

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
