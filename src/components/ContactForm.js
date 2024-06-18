import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import "./ContactForm.css";

const ContactForm = ({ className = "" }) => {
  return (
    <div className={`contact-form ${className}`}>
      <div className="contact-details">
        <div className="contact-information">Contact Information</div>
        <TextField
          className="form-field"
          placeholder="Email"
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "#b6b6b6" },
            "& .MuiInputBase-root": { height: "54px", backgroundColor: "#fff" },
            "& .MuiInputBase-input": { color: "#000" },
          }}
        />
      </div>
      <b className="payment-information">Payment Information</b>
      <div className="card-details">
        <div className="card-information">Card Information</div>
        <div className="form-field1">
          <div className="card-number-placeholder">1234 1234 1234 1234</div>
          <div className="card-icons">
            <img
              className="card-logos-icon"
              loading="lazy"
              alt=""
              src="/frame-1000006882@2x.png"
            />
            <img
              className="card-logos-icon1"
              loading="lazy"
              alt=""
              src="/frame-1000006883@2x.png"
            />
            <img
              className="card-logos-icon2"
              loading="lazy"
              alt=""
              src="/frame-1000006884@2x.png"
            />
          </div>
          <img className="icon" alt="" src="/icon.svg" />
        </div>
        <div className="expiry-date">
          <TextField
            className="form-field2"
            placeholder="MM/YY"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#b6b6b6" },
              "& .MuiInputBase-root": {
                height: "54px",
                backgroundColor: "#fff",
              },
              "& .MuiInputBase-input": { color: "#d9d9d9" },
            }}
          />
          <TextField
            className="form-field3"
            placeholder="MM/YY"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#b6b6b6" },
              "& .MuiInputBase-root": {
                height: "54px",
                backgroundColor: "#fff",
              },
              "& .MuiInputBase-input": { color: "#d9d9d9" },
            }}
          />
        </div>
      </div>
      <div className="contact-details1">
        <div className="carholder-name">Carholder Name</div>
        <TextField
          className="form-field4"
          placeholder="Name on Card"
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "#b6b6b6" },
            "& .MuiInputBase-root": { height: "54px", backgroundColor: "#fff" },
            "& .MuiInputBase-input": { color: "#d9d9d9" },
          }}
        />
      </div>
      <div className="region">
        <div className="country-or-region">Country or region</div>
        <div className="form-field5">
          <div className="usa">USA</div>
          <img className="dropdown-icon" alt="" src="/dropdown.svg" />
          <img className="icon1" alt="" src="/icon.svg" />
        </div>
      </div>
      <div className="compatibility">
        <input className="checkbox" type="checkbox" />
        <div className="i-verified-that">
          I verified that my device is eSIM compatible and is not carrier locked
          and i agree to the refund policy.
        </div>
      </div>
      <img
        className="agreement-icon"
        loading="lazy"
        alt=""
        src="/vector-342.svg"
      />
      <div className="i-verified-that1">
        I verified that my device is eSIM compatible and is not carrier locked
        and i agree to the refund policy.
      </div>
      <Button
        className="button4"
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
        Pay Now
      </Button>
    </div>
  );
};

ContactForm.propTypes = {
  className: PropTypes.string,
};

export default ContactForm;
