import "./SignUp.css";
import { SiJordan } from "react-icons/si";
import { SiNike } from "react-icons/si";

import { Box, Typography, TextField } from "@mui/material";

const SignUp = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        className="Main_box"
        sx={{ width: { lg: "460px", md: "460px", sm: "460px", xs: "90%" } }}
      >
        <Box
          className="Logo"
          sx={{ marginTop: "46px", height: "50px", width: "50px" }}
        >
          <SiNike className="logo-01" sx={{ height: "48px", width: "48px" }} />
          <SiJordan />
        </Box>

        <Box className="Headline">
          <Typography variant="h5">
            {" "}
            Enter your email to join us or sign in.
          </Typography>
        </Box>

        <Box className="country" sx={{ margin: "16px 0" }}>
          India <a href="">Change</a>
        </Box>

        <TextField id="outlined-basic" label="Email" variant="outlined" />

        <Box className="terms_condition" sx={{ margin: "16px 0" }}>
          By continuing, I agree to Nike’s <a href=""> Privacy Policy </a> and
          <a href=""> Terms of Use.</a>
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
              cursor: "pointer",
            }}
            onClick={() => {
              console.log("Submit button has been clicked");
            }}
          >
            Continue
          </button>
        </Box>
      </Box>
    </div>
  );
};

export default SignUp;
