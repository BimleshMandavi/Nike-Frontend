import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProduct } from "../../../redux/slices/productSlice";

function IconBox() {
  const dispatch = useDispatch();
  const [icon, setIcon] = useState("");

  console.log("icon", icon);
  const handleValues = (value) => {
    setIcon(value);
  };

  const fatchProduct = async () => {
    let result = await dispatch(
      getProduct(1, 12, { "title.longTitle": { $regex: icon, $options: "i" } })
    );
    if (result) {
      return true;
    }
  };

  useEffect(() => {
    fatchProduct();
  }, [icon]);

  return (
    <div>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={icon === "Air Force 1"}
              onChange={() => handleValues("Air Force 1")}
            />
          }
          label="Air Force 1"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={icon === "Air Max"}
              onChange={() => handleValues("Air Max")}
            />
          }
          label="Air Max"
        />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={icon === "Blazer"}
              onChange={() => handleValues("Blazer")}
            />
          }
          label="Blazer"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={icon === "Blasilia"}
              onChange={() => handleValues("Blasilia")}
            />
          }
          label="Blasilia"
        />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={icon === "Cortez"}
              onChange={() => handleValues("Cortez")}
            />
          }
          label="Cortez"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={icon === "Element"}
              onChange={() => handleValues("Element")}
            />
          }
          label="Element"
        />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={icon === "Huarache"}
              onChange={() => handleValues("Huarache")}
            />
          }
          label="Huarache"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={icon === "Mercurial"}
              onChange={() => handleValues("Mercurial")}
            />
          }
          label="Mercurial"
        />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={icon === "Melton"}
              onChange={() => handleValues("Melton")}
            />
          }
          label="Melton"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={icon === "Miler"}
              onChange={() => handleValues("Miler")}
            />
          }
          label="Miler"
        />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={icon === "Nike Dunk"}
              onChange={() => handleValues("Nike Dunk")}
            />
          }
          label="Nike Dunk"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={icon === "Pegasus"}
              onChange={() => handleValues("Pegasus")}
            />
          }
          label="Pegasus"
        />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={icon === "Phantom"}
              onChange={() => handleValues("Phantom")}
            />
          }
          label="Phantom"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={icon === "Structure"}
              onChange={() => handleValues("Structure")}
            />
          }
          label="Structure"
        />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={icon === "Sunray"}
              onChange={() => handleValues("Sunray")}
            />
          }
          label="Sunray"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={icon === "Terra Kiger"}
              onChange={() => handleValues("Terra Kiger")}
            />
          }
          label="Terra Kiger"
        />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={icon === "Tiempo"}
              onChange={() => handleValues("Tiempo")}
            />
          }
          label="Tiempo"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={icon === "Vomero"}
              onChange={() => handleValues("Vomero")}
            />
          }
          label="Vomero"
        />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={icon === "Windhorse"}
              onChange={() => handleValues("Windhorse")}
            />
          }
          label="Windhorse"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={icon === "Windrunner"}
              onChange={() => handleValues("Windrunner")}
            />
          }
          label="Windrunner"
        />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={icon === "Nike SuperRep"}
              onChange={() => handleValues("Nike SuperRep")}
            />
          }
          label="Nike SuperRep"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={icon === "Alphafly"}
              onChange={() => handleValues("Alphafly")}
            />
          }
          label="Alphafly"
        />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={icon === "Nike Vaporfly"}
              onChange={() => handleValues("Nike Vaporfly")}
            />
          }
          label="Nike Vaporfly"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={icon === "Nike ZoomFly"}
              onChange={() => handleValues("Nike ZoomFly")}
            />
          }
          label="Nike ZoomFly"
        />
      </FormGroup>
    </div>
  );
}

export default IconBox;
