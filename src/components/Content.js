
import PropTypes from "prop-types";
import "./Content.css";

const Content = ({ className = "" }) => {
  return (
    <section className={`content ${className}`}>
      <div className="checkout-form">
        <form className="form-container">
          <div className="form-header">
            <b className="checkout">Checkout</b>
            <div className="header3">
              <b className="billing-details">Billing Details</b>
            </div>
            <div className="form-field-block">
              <div className="row-1">
                <div className="block-1">
                  <b className="first-name">First Name</b>
                </div>
                <div className="block-2">
                  <b className="last-name">Last Name</b>
                </div>
              </div>
              <div className="row-2">
                <div className="block-11">
                  <b className="company-name">Company Name</b>
                </div>
                <div className="block-21">
                  <b className="country">Country</b>
                  <img className="icon" alt="" src="/icon.svg" />
                </div>
              </div>
              <div className="row-3">
                <div className="block-12">
                  <b className="street-address">Street Address</b>
                </div>
              </div>

              <div className="row-4">
                <div className="block-13">
                  <b className="town-city">Town / City</b>
                </div>
              </div>

              <div className="row-5">
              </div>
            </div>
            <div className="input-divider" />
            <div className="form-heading">
            </div>
          </div>
          <div className="order-details">
            <div className="checkout-details2">
              <div className="header4">
                <b className="checkout-details3">Checkout Details</b>
              </div>
              <div className="order-details-items">
                <b className="cart-subtotal1">Cart Subtotal</b>
                <b className="order-details-values">$360.00</b>
              </div>
              <div className="order-details-items1">
                <b className="shipping-handling1">{`Shipping & Handling`}</b>
                <b className="b3">$0.00</b>
              </div>
              <div className="order-details-items2">
                <b className="other-taxes1">Other Taxes</b>
                <b className="b4">$0.00</b>
              </div>
              <div className="order-details-divider" />
              <div className="order-details-items3">
                <b className="grand-total1">Grand Total</b>
                <b className="b5">$360.00</b>
              </div>
            </div>
            <div className="transfer-options">
              <div className="header5">
                <b className="transfer-options1">Transfer Options</b>
              </div>
              <div className="checkout-details4">
                <div className="logos-block">
                  <div className="block-15">
                    <div className="logo-block">
                      <img
                        className="image-1-icon"
                        loading="lazy"
                        alt=""
                        src="/image-1@2x.png"
                      />
                    </div>
                    <b className="bank-transfer">
                      <p className="bank">Bank</p>
                      <p className="transfer">Transfer</p>
                    </b>
                  </div>
                  <div className="block-25">
                    <div className="logo-block1">
                      <img
                        className="image-2-icon"
                        loading="lazy"
                        alt=""
                        src="/image-2@2x.png"
                      />
                    </div>
                    <b className="google-pay">
                      <p className="google">Google</p>
                      <p className="pay">Pay</p>
                    </b>
                  </div>
                </div>
                <div className="block-3-parent">
                  <div className="block-3">
                    <div className="logo-block2">
                      <img
                        className="image-3-icon"
                        loading="lazy"
                        alt=""
                        src="/image-3@2x.png"
                      />
                    </div>
                    <b className="apple-pay">
                      <p className="apple">Apple</p>
                      <p className="pay1">Pay</p>
                    </b>
                  </div>
                  <div className="block-4">
                    <div className="logo-block3">
                      <img
                        className="image-4-icon"
                        loading="lazy"
                        alt=""
                        src="/image-4@2x.png"
                      />
                    </div>
                    <b className="paypal">PayPal</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="checkout1">
          <div className="header6">
            <b className="checkout2">Checkout</b>
          </div>
          <div className="checkout-details5">
            <div className="your-personal-data">
              Your Personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our product
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
