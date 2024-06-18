import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <div className={`form-field-parent ${className}`}>
      <div className="form-field">
        <div className="search-input">
          <div className="form-label">Form Label</div>
        </div>
        <img className="icon" alt="" src="/icon.svg" />
      </div>
      <div className="input-divider" />
      <div className="categories1">
        <div className="category-dropdown">
          <div className="dropdown-label">
            <div className="select-category">Select Category</div>
          </div>
          <img className="arrow-drop-up-icon" alt="" src="/arrow-drop-up.svg" />
        </div>
        <div className="category-labels">
          <div className="most-popular1">Most Popular</div>
        </div>
        <div className="category-labels1">
          <div className="single-brands">Single Brands</div>
        </div>
        <div className="category-labels2">
          <div className="hypermarkets">HyperMarkets</div>
        </div>
        <div className="category-labels3">
          <div className="online-shopping">Online Shopping</div>
        </div>
        <div className="category-labels4">
          <div className="fashion-and-accessories">Fashion and Accessories</div>
        </div>
        <div className="category-labels5">
          <div className="electronics">Electronics</div>
        </div>
        <button className="button16">
          <img className="tag-icon" alt="" src="/tag-icon.svg" />
          <div className="button17">See More</div>
          <img className="tag-icon1" alt="" src="/tag-icon.svg" />
        </button>
      </div>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
