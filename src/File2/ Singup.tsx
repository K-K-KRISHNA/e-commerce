import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Component } from "react";
import { Link } from "react-router-dom";
import facebook from "../assets/Facebook.png";
import apple from "../assets/apple.png";
import google from "../assets/google.png";
import image from "../assets/person.png";
import { SignUpStyles } from "./ SignUpStyles";

export default class LoginPage extends Component {
  state = { isShowPassword: false };

  onClickPassword = () => {
    const { isShowPassword } = this.state;
    this.setState({ isShowPassword: !isShowPassword });
  };
  render() {
    const { isShowPassword } = this.state;
    return (
      <Box sx={SignUpStyles.mainContainer}>
        <Box sx={SignUpStyles.firstContainer}>
          <Typography variant="subtitle1" sx={SignUpStyles.logoHeading}>
            Your Logo
          </Typography>
        </Box>
        <Box sx={SignUpStyles.secondContainer}>
          <Box sx={SignUpStyles.first}>
            <Typography variant="h6" sx={SignUpStyles.secondHeading}>
              Sign in Up
            </Typography>
            <Typography variant="subtitle1" sx={SignUpStyles.secondParagraph}>
              Lorem Ipsum is simply
            </Typography>
            <Box sx={SignUpStyles.secondInnerContainer}>
              <Typography variant="subtitle2" sx={SignUpStyles.innerPara}>
                If you already have an account You can{" "}
                <Box component="span" sx={SignUpStyles.span}>
                  <Link to="/">Login here !</Link>
                </Box>
              </Typography>
              <Box component="img" src={image} sx={SignUpStyles.image} />
            </Box>
          </Box>
          <Box sx={SignUpStyles.second}>
            <Box sx={SignUpStyles.loginContainer}>
              <Typography variant="h3" sx={SignUpStyles.signHeader}>
                Sign Up
              </Typography>
              <Box
                component="input"
                sx={SignUpStyles.inputContent1}
                placeholder="Enter Email"
                type="email"
              />
              <Box
                component="input"
                sx={SignUpStyles.inputContent1}
                placeholder="Create User name"
                type="text"
              />
              <Box
                component="input"
                sx={SignUpStyles.inputContent1}
                placeholder="Contact number"
                type="number"
              />
              <Box sx={SignUpStyles.passwordContainer}>
                <Box
                  component="input"
                  placeholder="Password"
                  sx={SignUpStyles.inputContent2}
                  type={isShowPassword ? "text" : "password"}
                />

                {isShowPassword ? (
                  <VisibilityIcon
                    sx={SignUpStyles.invisible}
                    onClick={this.onClickPassword}
                  />
                ) : (
                  <VisibilityOffIcon
                    sx={SignUpStyles.invisible}
                    onClick={this.onClickPassword}
                  />
                )}
              </Box>

              <Typography variant="subtitle2" sx={SignUpStyles.forget}>
                Forget password?
              </Typography>
              <Box sx={SignUpStyles.passwordContainer}>
                <Box
                  component="input"
                  placeholder="Confirm Password"
                  sx={SignUpStyles.inputContent2}
                  type={isShowPassword ? "text" : "password"}
                />

                {isShowPassword ? (
                  <VisibilityIcon
                    sx={SignUpStyles.invisible}
                    onClick={this.onClickPassword}
                  />
                ) : (
                  <VisibilityOffIcon
                    sx={SignUpStyles.invisible}
                    onClick={this.onClickPassword}
                  />
                )}
              </Box>

              <Typography variant="subtitle2" sx={SignUpStyles.forget}>
                Forget password?
              </Typography>

              <Button variant="contained" sx={SignUpStyles.button}>
                Register
              </Button>
              <Box sx={SignUpStyles.iconContainer}>
                <Typography variant="subtitle2" sx={SignUpStyles.continue}>
                  or continue with
                </Typography>
                <Box sx={SignUpStyles.icons}>
                  <Box component="img" src={facebook} sx={SignUpStyles.icon} />
                  <Box component="img" src={apple} sx={SignUpStyles.icon} />
                  <Box component="img" src={google} sx={SignUpStyles.icon} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}
