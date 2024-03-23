import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProduct } from "../../../redux/slices/productSlice";

function BrandBox() {
  const dispatch = useDispatch();
  const [checkedValue, setCheckedValue] = useState("");
  const handleCheckboxChange = (value) => {
    setCheckedValue(value);
  };

  const handleFatchProducts = async () => {
    let result = await dispatch(
      getProduct(1, 12, {
        "title.longTitle": { $regex: checkedValue, $options: "i" },
      })
    );
    if (result) {
      return true;
    }
  };

  useEffect(() => {
    handleFatchProducts();
  }, [checkedValue]);

  return (
    <div>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
    
              checked={checkedValue === "Nike Sportswear"}
              onChange={() => handleCheckboxChange("Nike Sportswear")}
            />
          }
          label="Nike Sportswear"
        />
        <FormControlLabel
          control={<Checkbox />}
          checked={checkedValue === "Jordan"}
          onChange={() => handleCheckboxChange("Jordan")}
          label="Jordan"
        />

        <FormControlLabel
          control={
            <Checkbox
         
              checked={checkedValue === "Nike By You"}
              onChange={() => handleCheckboxChange("Nike By You")}
            />
          }
          label="Nike By You"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checkedValue === "NikeLab"}
              onChange={() => handleCheckboxChange("NikeLab")}
            />
          }
          label="NikeLab"
        />

        <FormControlLabel
          control={
            <Checkbox
      
              checked={checkedValue === "ACG"}
              onChange={() => handleCheckboxChange("ACG")}
            />
          }
          label="ACG"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checkedValue === "Nike Pro"}
              onChange={() => handleCheckboxChange("Nike Pro")}
            />
          }
          label="Nike Pro"
        />
      </FormGroup>
    </div>
  );
}

export default BrandBox;
