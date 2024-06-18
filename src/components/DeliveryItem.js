import { useMemo } from "react";
import PropTypes from "prop-types";
import "./DeliveryItem.css";

const DeliveryItem = ({
  className = "",
  image9,
  instacart,
  instacartIsAnAmericanDeli,
  propHeight,
  propDisplay,
}) => {
  const instacartIsAnStyle = useMemo(() => {
    return {
      height: propHeight,
      display: propDisplay,
    };
  }, [propHeight, propDisplay]);

  return (
    <div className={`delivery-item ${className}`}>
      <img className="image-9-icon" loading="lazy" alt="" src={image9} />
      <b className="instacart">{instacart}</b>
      <div className="delivery-info">
        <div className="instacart-is-an" style={instacartIsAnStyle}>
          {instacartIsAnAmericanDeli}
        </div>
        <div className="from-20-to1">From $20 to $200</div>
      </div>
      <button className="delivery-actions">
        <div className="buy1">Buy</div>
      </button>
    </div>
  );
};

DeliveryItem.propTypes = {
  className: PropTypes.string,
  image9: PropTypes.string,
  instacart: PropTypes.string,
  instacartIsAnAmericanDeli: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propDisplay: PropTypes.any,
};

export default DeliveryItem;
