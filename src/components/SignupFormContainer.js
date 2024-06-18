import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import "./SignupFormContainer.css";

const SignupFormContainer = ({ className = "" }) => {
  return (
    <section className={`signup-form-container ${className}`}>
      <div className="signup-form">
        <div className="sign-in2">
          <div className="login-fields">
            <b className="sign-up">Sign up</b>
            <div className="sign-up-to">
              Sign up to get rewards, and many more
            </div>
          </div>
          <form className="signup-inputs">
            <div className="name-address-username">
              <div className="name-address-username-fields">
                <div className="your-name">Your Name</div>
              </div>
              <TextField
                className="email-country-password"
                placeholder="Email"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#d1d1d1" },
                  "& .MuiInputBase-root": {
                    height: "40px",
                    backgroundColor: "#fff",
                  },
                  "& .MuiInputBase-input": { color: "#000" },
                }}
              />
            </div>
            <div className="name-address-username1">
              <div className="address-wrapper">
                <div className="address">Address</div>
              </div>
              <div className="country-parent">
                <div className="country1">Country</div>
                <img
                  className="email-country-password-inputs"
                  alt=""
                  src="/email-country-password-inputs.svg"
                />
              </div>
            </div>
            <div className="name-address-username2">
              <div className="username-parent">
                <div className="username1">Username</div>
                <img
                  className="name-address-username-inputs"
                  alt=""
                  src="/input-fields-background.svg"
                />
              </div>
              <div className="password-parent">
                <div className="password1">Password</div>
                <img className="frame-child" alt="" src="/frame-153-1.svg" />
              </div>
            </div>
            <Button
              className="button7"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#000",
                borderRadius: "100px",
                "&:hover": { background: "#000" },
                height: 54,
              }}
            >
              Sign Up
            </Button>
          </form>
          <div className="or-sign-up">or, sign up with</div>
          <div className="social-signup">
            <img
              className="social-signup-options"
              loading="lazy"
              alt=""
              src="/frame-158.svg"
            />
            <img
              className="social-signup-options1"
              loading="lazy"
              alt=""
              src="/frame-158.svg"
            />
            <img
              className="social-signup-options2"
              loading="lazy"
              alt=""
              src="/frame-158.svg"
            />
          </div>
        </div>
      </div>
      <img
        className="form-background-icon"
        loading="lazy"
        alt=""
        src="/rectangle-491@2x.png"
      />
    </section>
  );
};

SignupFormContainer.propTypes = {
  className: PropTypes.string,
};

export default SignupFormContainer;
