
import PropTypes from "prop-types";
import "./ProductInfo.css";

const ProductInfo = ({ className = "" }) => {
  return (
    <div className={`product-info ${className}`}>
      <div className="item-divider" />
      <div className="image-price">
        <img className="image-icon" alt="" src="/image@2x.png" />
        <div className="product-name-price">
          <b className="amazon-gift-card">Amazon Gift Card</b>
          <b className="worth-usd-400">Worth USD $400</b>
        </div>
        <div className="credits-action">
          <div className="credit-count">
            <b className="credit-label">$120.00</b>
            <b className="credits">12 Credits</b>
          </div>
          <div className="quantity-adjust">
            <div className="quantity-buttons">
              <div className="increase-button">
                <img className="icon-plus" alt="" src="/iconplus.svg" />
              </div>
              <b className="button-divider">3</b>
              <input className="decrease-button" type="checkbox" />
            </div>

          </div>
        </div>
        <b className="item-end">$120.00</b>
      </div>
    </div>
  );
};

ProductInfo.propTypes = {
  className: PropTypes.string,
};

export default ProductInfo;
