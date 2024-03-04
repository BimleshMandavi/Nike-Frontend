import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

function IconBox() {
  return (
    <div>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Air Force 1"
        />
        <FormControlLabel control={<Checkbox />} label="Air Max" />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Blazer"
        />
        <FormControlLabel control={<Checkbox />} label="Blasilia" />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Cortez"
        />
        <FormControlLabel control={<Checkbox />} label="Element" />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Huarache"
        />
        <FormControlLabel control={<Checkbox />} label="Mercurial" />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Melton"
        />
        <FormControlLabel control={<Checkbox />} label="Miler" />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Nike Dunk"
        />
        <FormControlLabel control={<Checkbox />} label="Pegasus" />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Phantom"
        />
        <FormControlLabel control={<Checkbox />} label="Structure" />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Sunray"
        />
        <FormControlLabel control={<Checkbox />} label="Terra Kiger" />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Tiempo"
        />
        <FormControlLabel control={<Checkbox />} label="Vomero" />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Windhorse"
        />
        <FormControlLabel control={<Checkbox />} label="Windrunner" />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Noke SuperRep"
        />
        <FormControlLabel control={<Checkbox />} label="Alphafly" />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Nike Vaporfly"
        />
        <FormControlLabel control={<Checkbox />} label="Nike ZoomFly" />
      </FormGroup>
    </div>
  );
}

export default IconBox;
