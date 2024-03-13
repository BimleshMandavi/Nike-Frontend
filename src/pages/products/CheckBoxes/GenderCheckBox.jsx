import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../../redux/slices/productSlice";

function GenderCheckBox() {
  const dispatch = useDispatch();

  const [gender, setGender] = useState("");

  const handleGender = (event) => {
    const genderValue = event.target.value;
    setGender(genderValue);
  };
  console.log("Gender :", gender);

  const fatchProducts = async () => {
    let result = await dispatch(
      getProducts(1, 12, { longTitle: { $regex: gender, $options: "i" } })
    );
    if (result) {
      return result;
    }
  };

  useEffect(() => {
    fatchProducts();
  }, [gender]);

  return (
    <>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          value={gender}
          onChange={handleGender}
          name="radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="unisex" control={<Radio />} label="Unisex" />
        </RadioGroup>
      </FormControl>
    </>
  );
}

export default GenderCheckBox;
