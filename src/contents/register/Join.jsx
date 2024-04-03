import "../auth/SignUp.css";
import { SiJordan } from "react-icons/si";
import { SiNike } from "react-icons/si";
import { useFormik } from "formik";
import { Box, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../redux/slices/auth";
import toast from "react-hot-toast";

const Join = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    onSubmit: async (values, action) => {
      const { firstName, lastName, email, password } = values;
      const data = { firstName, lastName, email, password };
      console.log("user data", data);
      let result = await dispatch(register(data));
      console.log(result);
      if (result) {
        navigate("/sign-in");
        toast.success("Registration Successful!");
        action.resetForm();
      } else {
        toast.error("Wrong username or password");
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
        height: "90vh",
        margin: "40px 0",
      }}
      className="px-[30px] flex-col"
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
              Enter your email to join us or sign up.
            </Typography>
          </Box>

          <Box className="country" sx={{ margin: "16px 0" }}>
            India <a href="">Change</a>
          </Box>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <TextField
              style={{ marginTop: "40px" }}
              id="outlined-basic1"
              label="First Name"
              name="firstName"
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            <TextField
              style={{ marginTop: "40px" }}
              id="outlined-basic1"
              label="Last Name"
              name="lastName"
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />

            <TextField
              style={{ marginTop: "40px" }}
              id="outlined-basic2"
              label="Email"
              name="email"
              type={"email"}
              required
              variant="outlined"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />

            <TextField
              id="outlined-basic3"
              label="Password"
              name="password"
              type={"password"}
              required
              variant="outlined"
              style={{ marginTop: "40px" }}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
          </div>

          <Box className="terms_condition" sx={{ margin: "40px 0" }}>
            By continuing, I agree to Nike’s <a href=""> Privacy Policy </a> and
            <a href=""> Terms of Use.</a>
          </Box>
          <Box className="terms_condition" sx={{ margin: "40px 0" }}>
            Already signup? <Link to="/sign-in">Log in</Link>
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
              Sign Up
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

export default Join;
