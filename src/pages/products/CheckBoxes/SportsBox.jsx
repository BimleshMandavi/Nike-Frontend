import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useState } from "react";
import PropTypes from "prop-types";

function SportsBox({ onSelectedSportValuesChange }) {
  const [selectedValues, setSelectedValues] = useState([]);

  console.log("selected values in child:", selectedValues);

  // Function to handle checkbox change
  const handleCheckboxChange = (value) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((item) => item !== value));
    } else {
      setSelectedValues([...selectedValues, value]);
 
    }
         onSelectedSportValuesChange(selectedValues);
  };
  return (
    <div>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedValues.includes("LifeStyle")}
              onChange={() => handleCheckboxChange("LifeStyle")}
            />
          }
          label="LifeStyle"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedValues.includes("Running")}
              onChange={() => handleCheckboxChange("Running")}
            />
          }
          label="Running"
        />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedValues.includes("Training Gym")}
              onChange={() => handleCheckboxChange("Training & Gym")}
            />
          }
          label="Training & GYM"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedValues.includes("Basketball")}
              onChange={() => handleCheckboxChange("Basketball")}
            />
          }
          label="Basketball"
        />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedValues.includes("Football")}
              onChange={() => handleCheckboxChange("Football")}
            />
          }
          label="Football"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedValues.includes("Yoga")}
              onChange={() => handleCheckboxChange("Yoga")}
            />
          }
          label="Yoga"
        />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedValues.includes("Golf")}
              onChange={() => handleCheckboxChange("Golf")}
            />
          }
          label="Golf"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedValues.includes("Skateboarding")}
              onChange={() => handleCheckboxChange("Skateboarding")}
            />
          }
          label="Skateboarding"
        />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedValues.includes("Tennis")}
              onChange={() => handleCheckboxChange("Tennis")}
            />
          }
          label="Tennis"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedValues.includes("Althletics")}
              onChange={() => handleCheckboxChange("Althletics")}
            />
          }
          label="Althletics"
        />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedValues.includes("Walking")}
              onChange={() => handleCheckboxChange("Walking")}
            />
          }
          label="Walking"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedValues.includes("Dance")}
              onChange={() => handleCheckboxChange("Dance")}
            />
          }
          label="Dance"
        />
      </FormGroup>
    </div>
  );
}

SportsBox.propTypes = {
  onSelectedSportValuesChange: PropTypes.func.isRequired,
};

export default SportsBox;
