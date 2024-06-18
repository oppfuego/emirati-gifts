import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "", image7 }) => {
  return (
    <div className={`image-7-parent ${className}`}>
      <img className="image-7-icon" alt="" src={image7} />
      <div className="electronics-description-parent">
        <div className="electronics-description">
          <b className="best-buy">Best Buy</b>
          <div className="electronics-content">
            <div className="best-buy-is">
              Best Buy is an American multinational consumer electronics
              retailer headquartered in Richfield, Minnesota.
            </div>
            <div className="from-20-to2">From $20 to $200</div>
          </div>
        </div>
        <button className="electronics-actions">
          <div className="buy2">Buy</div>
        </button>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
  image7: PropTypes.string,
};

export default FrameComponent2;
