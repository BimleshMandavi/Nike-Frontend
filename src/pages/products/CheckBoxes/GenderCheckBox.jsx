import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

import PropTypes from "prop-types";
import { useState } from "react";

function GenderCheckBox({ onSelectedGenderValuesChange }) {
  const [gender, setGender] = useState("");

  const handleGender = (event) => {
    const genderValue = event.target.value;
    setGender(genderValue);
    onSelectedGenderValuesChange(gender);
  };
  console.log("Gender :", gender);

  // const fatchProducts = async () => {
  //   let result = await dispatch(
  //     getProduct(1, 12, {
  //       "title.longTitle": { $regex: gender, $options: "i" },
  //     })
  //   );
  //   if (result) {
  //     return result;
  //   }
  // };

  // useEffect(() => {
  //   fatchProducts();
  // }, [gender]);

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
          <FormControlLabel value="Women" control={<Radio />} label="Female" />
          <FormControlLabel value="Men" control={<Radio />} label="Male" />
          <FormControlLabel value="unisex" control={<Radio />} label="Unisex" />
        </RadioGroup>
      </FormControl>
    </>
  );
}

GenderCheckBox.propTypes = {
  onSelectedGenderValuesChange: PropTypes.func.isRequired,
};

export default GenderCheckBox;
