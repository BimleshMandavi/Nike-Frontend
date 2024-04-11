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
      let result = await dispatch(login(data));
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
  const loginWithGoogle = () => {
    window.open(`http://localhost:5003/auth/google`, "_self");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
      className="px-[50px] pt-6 flex-col mt-10"
    >
      <form onSubmit={formik.handleSubmit}>
        <Box
          className="Main_box"
          sx={{ width: { lg: "460px", md: "460px", sm: "460px", xs: "100%" } }}
        >
          <div className="Logo flex my-8">
            <div>
              <SiNike className="logo-01 size-10" />
            </div>
            <div>
              <SiJordan className="size-10" />
            </div>
          </div>

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
              id="outlined-basic01"
              name="username"
              label="Email"
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              required={true}
            />
            <TextField
              style={{ marginTop: "40px" }}
              id="outlined-basic02"
              name="password"
              label="Password"
              type={"password"}
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              required={true}
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
              Sign In
            </button>
          </Box>
        </Box>
      </form>
      <button
        style={{
          color: "#ffff",
          padding: "15px",
          backgroundColor: "#4853f2",
          borderRadius: "25px",
          width: "20rem",
          cursor: "pointer",
          boxShadow: "2px black",
        }}
        className="bg-black text-white w-[30em] h-[110px]"
        onClick={() => loginWithGoogle()}
      >
        Continue with Google
      </button>
    </div>
  );
};

export default SignUp;
