import "./SignUp.css";
import { SiJordan } from "react-icons/si";
import { SiNike } from "react-icons/si";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import {
  Box,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60vh",
      }}
    >
      <Box
        className="Main_box"
        sx={{ width: { lg: "460px", md: "460px", sm: "460px", xs: "100%" } }}
      >
        <Box
          className="Logo"
          sx={{ marginTop: "46px", height: "50px", width: "50px" }}
        >
          <SiNike className="logo-01" sx={{ height: "50px", width: "50px" }} />
          <SiJordan />
        </Box>

        <Box className="Headline">
          <Typography variant="h5">
            Enter your email to join us or sign in.
          </Typography>
        </Box>

        <Box className="country" sx={{ margin: "16px 0" }}>
          India <a href="">Change</a>
        </Box>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TextField id="outlined-basic" label="Email" variant="outlined" />

          <FormControl
            sx={{ width: "100%" }}
            variant="outlined"
            style={{ marginTop: "20px" }}
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </div>

        <Box className="terms_condition" sx={{ margin: "16px 0" }}>
          By continuing, I agree to Nike’s <a href=""> Privacy Policy </a> and
          <a href=""> Terms of Use.</a>
        </Box>
        <Box className="terms_condition" sx={{ margin: "16px 0" }}>
          New member ? <Link to="/sign-up">Sign up</Link>
        </Box>

        <Box
          className="continue"
          sx={{
            margin: "40px 0",
            display: "flex",
            flexDirection: {
              lg: "row-reverse",
              md: "row-reverse",
              sm: "row-reverse",
              xs: "column",
            },
          }}
        >
          <button
            type="submit"
            style={{
              color: "#ffff",
              padding: "15px",
              backgroundColor: "black",
              borderRadius: "30px",
              width: "12rem",
              cursor: "pointer",
            }}
            onClick={() => {
              console.log("Submit button has been clicked");
            }}
          >
            Submit
          </button>
        </Box>
      </Box>
    </div>
  );
};

export default SignUp;
