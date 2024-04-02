import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";

import PropTypes from "prop-types";

const ColorCheckboxes = ({ onSelectedColourValuesChange }) => {
  const [checkedValue, setCheckedValue] = useState([]);

  
  console.log("checked colour", checkedValue);

  const handleCheckboxChange = (value) => {
    if (checkedValue.includes(value)) {
      setCheckedValue(checkedValue.filter((item) => item !== value));
    } else {
      setCheckedValue([...checkedValue, value]);
    }
    onSelectedColourValuesChange(checkedValue);
  };

  // const handleFetchProducts = async () => {
  //   let result = await dispatch(
  //     getProduct(1, 12, {
  //       subCategory: { $regex: checkedValue, $options: "i" },
  //     })
  //   );
  //   if (result) {
  //     return true;
  //   }
  // };

  // useEffect(() => {
  //   handleFetchProducts();
  // }, [checkedValue]);

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            checked={checkedValue.includes("Red")}
            onChange={() => handleCheckboxChange("Red")}
          />
        }
        label="Red"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={checkedValue.includes("blue")}
            onChange={() => handleCheckboxChange("blue")}
          />
        }
        label="Blue"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={checkedValue.includes("green")}
            onChange={() => handleCheckboxChange("green")}
          />
        }
        label="Green"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={checkedValue.includes("black")}
            onChange={() => handleCheckboxChange("black")}
          />
        }
        label="Black"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={checkedValue.includes("white")}
            onChange={() => handleCheckboxChange("white")}
          />
        }
        label="White"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={checkedValue.includes("pink")}
            onChange={() => handleCheckboxChange("pink")}
          />
        }
        label="Pink"
      />
    </FormGroup>
  );
};

ColorCheckboxes.propTypes = {
  onSelectedColourValuesChange: PropTypes.func.isRequired,
};

export default ColorCheckboxes;
