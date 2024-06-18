import { useMemo } from "react";
import PropTypes from "prop-types";
import "./ItemFrame.css";

const ItemFrame = ({
  className = "",
  image,
  amazon,
  amazonTheBiggestMarketPla,
  propWidth,
  propDisplay,
}) => {
  const amazonStyle = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay,
    };
  }, [propWidth, propDisplay]);

  return (
    <div className={`item-frame ${className}`}>
      <img className="image-icon" loading="lazy" alt="" src={image} />
      <b className="amazon" style={amazonStyle}>
        {amazon}
      </b>
      <div className="item-info">
        <div className="item-description">
          <div className="amazon-the-biggest">{amazonTheBiggestMarketPla}</div>
          <div className="from-20-to">From $20 to $200</div>
        </div>
        <button className="item-actions">
          <div className="buy">Buy</div>
        </button>
      </div>
    </div>
  );
};

ItemFrame.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  amazon: PropTypes.string,
  amazonTheBiggestMarketPla: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propDisplay: PropTypes.any,
};

export default ItemFrame;
