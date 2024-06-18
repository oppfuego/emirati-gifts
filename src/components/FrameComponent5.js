import PropTypes from "prop-types";
import "./FrameComponent5.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <div className={`product-details-wrapper ${className}`}>
      <form className="product-details">
        <div className="product-image-container">
          <img
            className="image-1-icon"
            loading="lazy"
            alt=""
            src="/image-12@2x.png"
          />
          <div className="product-info">
            <div className="product-tabs">
              <div className="about-this-gift">About this Gift Voucher</div>
              <img className="tab-icons" alt="" src="/tab-icons.svg" />
            </div>
            <div className="product-tabs1">
              <div className="how-to-use">How to Use</div>
              <img className="product-tabs-child" alt="" src="/tab-icons.svg" />
            </div>
            <div className="product-tabs2">
              <div className="brands-included-in">
                Brands Included In this Voucher
              </div>
              <img className="product-tabs-item" alt="" src="/tab-icons.svg" />
            </div>
            <div className="product-tabs3">
              <div className="terms-conditions">{`Terms & Conditions`}</div>
              <img className="product-tabs-inner" alt="" src="/tab-icons.svg" />
            </div>
            <div className="product-description">
              <div className="note">Note:</div>
              <div className="discover-the-perfect">{`Discover the perfect blend of style and utility with our Shoes & Wallet Gift Card. Whether it's stepping out in fashionable footwear or staying organized with a sleek wallet, this versatile gift card offers endless possibilities. Give the gift of choice and let your loved ones indulge in their favorite brands and styles.
`}</div>
            </div>
          </div>
        </div>
        <div className="purchase-options">
          <div className="recipient-selection">
            <div className="recipient-buttons">
              <h1 className="apple-gift-card">Apple Gift Card</h1>
              <div className="introducing-the-shoes">{`Introducing the Shoes & Wallet Gift Card from WishDeck - the perfect pairing for those who appreciate both style and practicality. With this versatile eGift card, recipients can explore a wide array of footwear options to step out in fashion-forward confidence, while also browsing through a selection of sleek wallets to complement their everyday essentials.`}</div>
            </div>
            <div className="gift-message">
              <div className="i-would-like">I would Like to:</div>
              <div className="recipient-options">
                <button className="recipient-choices">
                  <div className="gift-a-friend">Gift a Friend</div>
                </button>
                <button className="recipient-choices1">
                  <div className="gift-myself">Gift Myself</div>
                </button>
              </div>
            </div>
            <div className="card-value">
              <div className="gift-card-worth">Gift Card Worth:</div>
              <div className="value-options">
                <button className="value-buttons">
                  <div className="usd-200">USD $200</div>
                </button>
                <button className="value-buttons1">
                  <div className="usd-500">USD $500</div>
                </button>
                <button className="value-buttons2">
                  <div className="usd-700">USD $700</div>
                </button>
                <button className="value-buttons3">
                  <div className="usd-1000">USD $1000</div>
                </button>
              </div>
            </div>
            <div className="quantity">
              <div className="select-your-quantity">Select your Quantity</div>
              <div className="quantity-controls">
                <div className="add-button-container">
                  <div className="add-button-container-child" />
                  <img
                    className="add-icon"
                    loading="lazy"
                    alt=""
                    src="/add.svg"
                  />
                </div>
                <div className="empty-quantity">
                  <b className="empty-quantity-label">4</b>
                </div>
                <div className="add-button-container1">
                  <div className="add-button-container-item" />
                  <div className="add-icon-wrapper">
                    <img
                      className="add-icon1"
                      loading="lazy"
                      alt=""
                      src="/vector-600.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button className="button18">
              <img className="tag-icon2" alt="" src="/tag-icon.svg" />
              <b className="button19">Add to Cart</b>
              <img className="tag-icon3" alt="" src="/tag-icon.svg" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
