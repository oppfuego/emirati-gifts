
import ProductInfo from "./ProductInfo";
import PropTypes from "prop-types";
import "./CartItems.css";

const CartItems = ({ className = "" }) => {
  return (
    <section className={`cart-items ${className}`}>
      <div className="cart-item">
        <div className="product-details">
          <div className="cart-item-details">
            <div className="header1">
              <div className="header-child" />
              <div className="product-column">
                <b className="product">Product</b>
              </div>
              <div className="price-quantity-column">
                <b className="price">Price</b>
                <b className="quantity">Quantity</b>
              </div>
              <b className="total">Total</b>
            </div>
            <div className="item-info">
              <img
                className="image-icon1"
                loading="lazy"
                alt=""
                src="/image@2x.png"
              />
              <div className="item-name-discount">
                <b className="amazon-gift-card1">Amazon Gift Card</b>
                <b className="discount-20-off">Discount: 20% OFF</b>
              </div>
              <div className="item-price">
                <div className="item-credits">
                  <b className="item-credit-value">$120.00</b>
                  <b className="credits1">12 Credits</b>
                </div>
                <div className="item-quantity">
                  <div className="quantity-buttons1">
                    <div className="quantity-icons">
                      <img
                        className="icon-plus1"
                        loading="lazy"
                        alt=""
                        src="/iconplus.svg"
                      />
                    </div>
                    <b className="quantity-divider">3</b>
                    <input className="quantity-icons1" type="checkbox" />
                  </div>

                </div>
              </div>
              <b className="item-info-end">$120.00</b>
            </div>
          </div>
          <ProductInfo />
          <ProductInfo />
          <div className="cart-actions">
            <div className="action-divider" />
            <div className="cart-buttons">

                Go Back

                Checkout
            </div>
          </div>
        </div>
        <div className="checkout-details">
          <div className="checkout-header">
            <div className="header2">
              <b className="checkout-details1">Checkout Details</b>
            </div>
          </div>
          <div className="subtotal-total">
            <div className="subtotal-total-labels">
              <b className="cart-subtotal">Cart Subtotal</b>
              <b className="subtotal-divider">$360.00</b>
            </div>
          </div>
          <div className="checkout-summary">
            <div className="summary-details">
              <div className="summary-labels">
                <b className="shipping-handling">{`Shipping & Handling`}</b>
                <b className="other-taxes">Other Taxes</b>
              </div>
              <div className="summary-labels1">
                <b className="b">$0.00</b>
                <b className="b1">$0.00</b>
              </div>
            </div>
          </div>
          <div className="summary-divider">
            <div className="checkout-divider" />
          </div>
          <div className="subtotal-total1">
            <div className="grand-total-parent">
              <b className="grand-total">Grand Total</b>
              <b className="b2">$360.00</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

CartItems.propTypes = {
  className: PropTypes.string,
};

export default CartItems;
