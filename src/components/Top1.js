import PropTypes from "prop-types";
import "./Top1.css";

const Top1 = ({ className = "", yourCart, viewOrEditYourCartBeforeC }) => {
  return (
    <section className={`top ${className}`}>

      <div className="cart-header-wrapper">
        <div className="cart-header">
          <div className="cart-title">
            <b className="your-cart">{yourCart}</b>
          </div>
          <b className="view-or-edit">{viewOrEditYourCartBeforeC}</b>
        </div>
      </div>
    </section>
  );
};

Top1.propTypes = {
  className: PropTypes.string,
  yourCart: PropTypes.string,
  viewOrEditYourCartBeforeC: PropTypes.string,
};

export default Top1;
