import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

function BrandBox() {
  return (
    <div>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Nike Sportswear"
        />
        <FormControlLabel control={<Checkbox />} label="Jordan" />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Nike By You"
        />
        <FormControlLabel control={<Checkbox />} label="NikeLab" />
      </FormGroup>
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="ACG" />
        <FormControlLabel control={<Checkbox />} label="Nike Pro" />
      </FormGroup>
    </div>
  );
}

export default BrandBox;
