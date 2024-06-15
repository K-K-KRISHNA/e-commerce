import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { LoginPageStyles } from "./LoginPageStyles";
import facebook from "./assets/Facebook.png";
import apple from "./assets/apple.png";
import google from "./assets/google.png";
import image from "./assets/person.png";
import { loginSubmission } from "./features/loginSlice";
import { AppDispatch, RootState } from "./store";
interface IState {
  isShowPassword: boolean;
  details: {
    email: string;
    password: string;
  };
}

const LoginPage = () => {
  const { apiStatus } = useSelector((state: RootState) => state.login);

  const dispatch = useDispatch<AppDispatch>();

  const [isShowPassword, setIsShowPassword] =
    useState<IState["isShowPassword"]>(false);
  const [details, setDetails] = useState<IState["details"]>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const onClickPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const submissionByRedux = () => {
    dispatch(loginSubmission(details));
    if (apiStatus === "SUCCESS") navigate("/");
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    setDetails({ ...details, [event.target.name]: event.target.value });

  const token = localStorage.getItem("token");
  if (token) return <Navigate to="/" />;
  return (
    <Box sx={LoginPageStyles.mainContainer}>
      <Box sx={LoginPageStyles.firstContainer}>
        <Typography variant="subtitle1" sx={LoginPageStyles.logoHeading}>
          Your Logo
        </Typography>
      </Box>
      <Box sx={LoginPageStyles.secondContainer}>
        <Box sx={LoginPageStyles.first}>
          <Typography variant="h6" sx={LoginPageStyles.secondHeading}>
            Sign in to
          </Typography>
          <Typography variant="subtitle1" sx={LoginPageStyles.secondParagraph}>
            Lorem Ipsum is simply
          </Typography>
          <Box sx={LoginPageStyles.secondInnerContainer}>
            <Typography variant="subtitle2" sx={LoginPageStyles.innerPara}>
              If you don't have an account register You can{" "}
              <Box component="span" sx={LoginPageStyles.span}>
                <Link to="/signUpPage">Register here!</Link>
              </Box>
            </Typography>
            <Box component="img" src={image} sx={LoginPageStyles.image} />
          </Box>
        </Box>
        <Box sx={LoginPageStyles.second}>
          <Box sx={LoginPageStyles.loginContainer}>
            <Typography variant="h3" sx={LoginPageStyles.signHeader}>
              Sign in
            </Typography>
            <Box
              component="input"
              sx={LoginPageStyles.inputContent1}
              placeholder="Enter email or user name"
              type="text"
              value={details.email}
              name="email"
              onChange={changeHandler}
            />
            <Box sx={LoginPageStyles.passwordContainer}>
              <Box
                component="input"
                name="password"
                placeholder="Password"
                sx={LoginPageStyles.inputContent2}
                type={isShowPassword ? "text" : "password"}
                value={details.password}
                onChange={changeHandler}
              />

              {isShowPassword ? (
                <VisibilityIcon
                  sx={LoginPageStyles.invisible}
                  onClick={onClickPassword}
                />
              ) : (
                <VisibilityOffIcon
                  sx={LoginPageStyles.invisible}
                  onClick={onClickPassword}
                />
              )}
            </Box>

            <Typography variant="subtitle2" sx={LoginPageStyles.forget}>
              Forget password?
            </Typography>
            <Button
              variant="contained"
              sx={LoginPageStyles.button}
              onClick={submissionByRedux}
            >
              Login
            </Button>
            <Box sx={LoginPageStyles.iconContainer}>
              <Typography variant="subtitle2" sx={LoginPageStyles.continue}>
                or continue with
              </Typography>
              <Box sx={LoginPageStyles.icons}>
                <Box component="img" src={facebook} sx={LoginPageStyles.icon} />
                <Box component="img" src={apple} sx={LoginPageStyles.icon} />
                <Box component="img" src={google} sx={LoginPageStyles.icon} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
