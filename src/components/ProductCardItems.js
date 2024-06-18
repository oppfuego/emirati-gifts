import { useMemo } from "react";
import PropTypes from "prop-types";
import "./ProductCardItems.css";

const ProductCardItems = ({
  className = "",
  image,
  playStation,
  playStationOneOfTheBigges,
  propWidth,
  propDisplay,
}) => {
  const playStationStyle = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay,
    };
  }, [propWidth, propDisplay]);

  return (
    <div className={`product-card-items ${className}`}>
      <img className="image-icon2" alt="" src={image} />
      <b className="playstation" style={playStationStyle}>
        {playStation}
      </b>
      <div className="frame-parent1">
        <div className="playstation-one-of-the-bigges-parent">
          <div className="playstation-one-of">{playStationOneOfTheBigges}</div>
          <div className="from-20-to4">From $20 to $200</div>
        </div>
        <button className="buy-wrapper">
          <b className="buy4">Buy</b>
        </button>
      </div>
    </div>
  );
};

ProductCardItems.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  playStation: PropTypes.string,
  playStationOneOfTheBigges: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propDisplay: PropTypes.any,
};

export default ProductCardItems;
