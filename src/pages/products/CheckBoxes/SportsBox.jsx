import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

function SportsBox() {
  return (
    <div>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="LifeStyle"
        />
        <FormControlLabel control={<Checkbox />} label="Running" />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Training & GYM"
        />
        <FormControlLabel control={<Checkbox />} label="Basketball" />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Football"
        />
        <FormControlLabel control={<Checkbox />} label="Yoga" />
      </FormGroup>
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Golf" />
        <FormControlLabel control={<Checkbox />} label="Skateboarding" />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Tennis"
        />
        <FormControlLabel control={<Checkbox />} label="Althletics" />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Walking"
        />
        <FormControlLabel control={<Checkbox />} label="Dance" />
      </FormGroup>
    </div>
  );
}

export default SportsBox;
