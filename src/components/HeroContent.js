import PropTypes from "prop-types";
import "./HeroContent.css";

const HeroContent = ({ className = "" }) => {
  return (
    <div className={`hero-content ${className}`}>
      <div className="logo7">
        <img
          className="logo-symbol-icon"
          loading="lazy"
          alt=""
          src="/logo-symbol.svg"
        />
        <div className="bellatime-wrapper">
          <b className="bellatime">Bellatime</b>
        </div>
      </div>
      <img
        className="hero-image-icon"
        loading="lazy"
        alt=""
        src="/frame-1000006877@2x.png"
      />
      <div className="footer-info">
        <div className="copyright3">
          <div className="powered-by">{`Powered by `}</div>
        </div>
        <div className="legal-links">
          <img
            className="payment-icons"
            loading="lazy"
            alt=""
            src="/payment-icons@2x.png"
          />
          <div className="payment-logo">
            <img
              className="payment-icon"
              loading="lazy"
              alt=""
              src="/vector-341.svg"
            />
          </div>
          <div className="legal-options">
            <div className="legal3">Legal</div>
          </div>
          <div className="legal-options1">
            <div className="refunds">Refunds</div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroContent.propTypes = {
  className: PropTypes.string,
};

export default HeroContent;
