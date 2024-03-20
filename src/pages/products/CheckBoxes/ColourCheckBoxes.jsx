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
            defaultChecked
          />
        }
        label="Red"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={checkedValue === "blue"}
            onChange={() => handleCheckboxChange("blue")}
            defaultChecked
          />
        }
        label="Blue"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={checkedValue === "green"}
            onChange={() => handleCheckboxChange("green")}
            defaultChecked
          />
        }
        label="Green"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={checkedValue === "black"}
            onChange={() => handleCheckboxChange("black")}
            defaultChecked
          />
        }
        label="Black"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={checkedValue === "white"}
            onChange={() => handleCheckboxChange("white")}
            defaultChecked
          />
        }
        label="White"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={checkedValue === "pink"}
            onChange={() => handleCheckboxChange("pink")}
            defaultChecked
          />
        }
        label="Pink"
      />
    </FormGroup>
  );
};

export default ColorCheckboxes;
