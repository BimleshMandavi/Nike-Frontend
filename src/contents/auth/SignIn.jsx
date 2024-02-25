import "./SignUp.css";
import { SiJordan } from "react-icons/si";
import { SiNike } from "react-icons/si";
import { Box, Typography, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/auth";
import toast from "react-hot-toast";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values, action) => {
      const { username, password } = values;
      const data = { username, password };
      console.log(data);
      let result = await dispatch(login(data));
      console.log(result);
      if (result) {
        localStorage.setItem("accessToken", result.token);
        navigate("/");
        toast.success("Login successful!");
        action.resetForm();
      } else {
        toast.error("Incorrect username or password");
      }
    },
  });

  console.log("form values", formik.values);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60vh",
        margin: "40px 0",
      }}
      className="px-[30px] pt-6"
    >
      <form onSubmit={formik.handleSubmit}>
        <Box
          className="Main_box"
          sx={{ width: { lg: "460px", md: "460px", sm: "460px", xs: "100%" } }}
        >
          <Box
            className="Logo"
            sx={{ marginTop: "46px", height: "50px", width: "50px" }}
          >
            <SiNike
              className="logo-01"
              sx={{ height: "50px", width: "50px" }}
            />
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
            <TextField
              style={{ marginTop: "40px" }}
              id="outlined-basic"
              name="username"
              label="Email"
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            <TextField
              style={{ marginTop: "40px" }}
              id="outlined-basic"
              name="password"
              label="Password"
              type={"password"}
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
          </div>

          <Box className="terms_condition" sx={{ margin: "40px 0" }}>
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
            >
              Submit
            </button>
          </Box>
        </Box>
      </form>
    </div>
  );
};

export default SignUp;
