import { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { useDispatch } from "react-redux";
import { getProducts } from "../../../redux/slices/productSlice";

const ColorCheckboxes = () => {
    const dispatch = useDispatch();
  const [checkedValue, setCheckedValue] = useState("");

  const handleCheckboxChange = (value) => {
    if (value === checkedValue) {
      setCheckedValue("");
    } else {
      setCheckedValue(value);
    }
    console.log("colour", checkedValue);
  };

  const handleFetchProducts = async() => {
    let result = await dispatch(getProducts(1,10,{"subCategory":{"$regex":checkedValue,"$options":"i"}}))
    if(result){
        return true
    }
  }

  useEffect(()=>{
    handleFetchProducts();
  },[checkedValue])

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
    </FormGroup>
  );
};

export default ColorCheckboxes;
