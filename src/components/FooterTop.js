import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./FooterTop.css";

const FooterTop = ({ className = "" }) => {
  return (
    <div className={`footer-top2 ${className}`}>
      <div className="footer-left">
        <div className="join-us2">
          <h1 className="join-700k-customers3">Join 700k+ Customers</h1>
          <div className="join-the-thousand3">
            Join the thousand of users worldwide using EmiratiGifts to carry out
            safe and secure digital transaction. We are ready to welcome you.
          </div>
        </div>
        <div className="button-container2">
          <Button
            className="button3"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#000",
              border: "#000 solid 0.5px",
              borderRadius: "100px",
              "&:hover": { background: "#000" },
              height: 46,
            }}
          >
            Sign up for Free
          </Button>
        </div>
      </div>
      <div className="footer-divider3" />
    </div>
  );
};

FooterTop.propTypes = {
  className: PropTypes.string,
};

export default FooterTop;
