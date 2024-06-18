import { useMemo } from "react";
import PropTypes from "prop-types";
import "./ItemFrame1.css";

const ItemFrame1 = ({
  className = "",
  image,
  nintendo,
  japaneseMultinationalVide,
  propHeight,
  propDisplay,
}) => {
  const japaneseMultinationalVideoStyle = useMemo(() => {
    return {
      height: propHeight,
      display: propDisplay,
    };
  }, [propHeight, propDisplay]);

  return (
    <div className={`item-frame1 ${className}`}>
      <img className="image-icon1" loading="lazy" alt="" src={image} />
      <b className="nintendo">{nintendo}</b>
      <div className="card-descriptions">
        <div
          className="japanese-multinational-video"
          style={japaneseMultinationalVideoStyle}
        >
          {japaneseMultinationalVide}
        </div>
        <div className="from-20-to3">From $20 to $200</div>
      </div>
      <button className="view-more-button-container">
        <b className="buy3">Buy</b>
      </button>
    </div>
  );
};

ItemFrame1.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  nintendo: PropTypes.string,
  japaneseMultinationalVide: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propDisplay: PropTypes.any,
};

export default ItemFrame1;
