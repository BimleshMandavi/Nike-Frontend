import { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { useDispatch } from "react-redux";
import { getProduct } from "../../../redux/slices/productSlice";

const ColorCheckboxes = () => {
  const dispatch = useDispatch();
  const [checkedValue, setCheckedValue] = useState("");

  const handleCheckboxChange = (value) => {
    if (value === checkedValue) {
      setCheckedValue("");
    } else {
      setCheckedValue(value);
    }
  };

  const handleFetchProducts = async () => {
    let result = await dispatch(
      getProduct(1, 12, {
        subCategory: { $regex: checkedValue, $options: "i" },
      })
    );
    if (result) {
      return true;
    }
  };

  useEffect(() => {
    handleFetchProducts();
  }, [checkedValue]);

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            checked={checkedValue === "red"}
            onChange={() => handleCheckboxChange("red")}
          />
        }
        label="Red"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={checkedValue === "blue"}
            onChange={() => handleCheckboxChange("blue")}
          />
        }
        label="Blue"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={checkedValue === "green"}
            onChange={() => handleCheckboxChange("green")}
          />
        }
        label="Green"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={checkedValue === "black"}
            onChange={() => handleCheckboxChange("black")}
          />
        }
        label="Black"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={checkedValue === "white"}
            onChange={() => handleCheckboxChange("white")}
          />
        }
        label="White"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={checkedValue === "pink"}
            onChange={() => handleCheckboxChange("pink")}
          />
        }
        label="Pink"
      />
    </FormGroup>
  );
};

export default ColorCheckboxes;
