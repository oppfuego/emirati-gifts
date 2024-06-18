import PropTypes from "prop-types";
import "./Dashboard.css";

const Dashboard = ({ className = "" }) => {
  return (
    <section className={`dashboard ${className}`}>
      <div className="dashboard-content">
        <div className="dashboard-info">
          <b className="user-account">User Account</b>
          <div className="header7">
            <b className="your-active-downloads">Your Active Downloads</b>
          </div>
          <div className="cart-row-1">
            <div className="product2">
              <img
                className="image-icon2"
                loading="lazy"
                alt=""
                src="/image@2x.png"
              />
              <div className="title">
                <b className="amazon-gift-card2">Amazon Gift Card</b>
                <b className="discount-20-off1">Discount: 20% OFF</b>
              </div>
            </div>
            <div className="summary-labels2">
              <b className="summary-types">$120.00</b>
              <b className="credits2">12 Credits</b>
            </div>
            <div className="summary-labels3">
              <b className="up-time">Up Time</b>
              <b className="hrs">120 Hrs</b>
            </div>
            <div className="renewal-info">
              <div className="renewal-date">
                <b className="next-renewal">Next Renewal</b>
                <b className="april-2024">24 April, 2024</b>
              </div>
              <div className="links">
                <div className="link">
                  <img
                    className="icons-block"
                    loading="lazy"
                    alt=""
                    src="/icons-block.svg"
                  />
                  <div className="cancel">Cancel</div>
                </div>
                <div className="link1">
                  <img
                    className="icons-block1"
                    alt=""
                    src="/icons-block-1.svg"
                  />
                  <div className="renew">Renew</div>
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard-info-child" />
        </div>
        <div className="user-details">
          <div className="checkout-details6">
            <div className="header8">
              <b className="user-details1">User Details</b>
            </div>
            <div className="user-form-labels">
              <b className="name">Name</b>
              <b className="darnell-roob">Darnell Roob</b>
            </div>
            <div className="user-form-labels1">
              <b className="email-address">Email Address</b>
              <b className="darnellroobhotmailcom">Darnell.Roob@hotmail.com</b>
            </div>
            <div className="user-form-labels2">
              <b className="plan">Plan</b>
              <b className="basic">Basic</b>
            </div>
            <div className="user-form-labels3">
              <b className="expiry-date">Expiry Date</b>
              <b className="april-20241">24 April, 2024</b>
            </div>
            <div className="user-form-labels4">
              <b className="auto-renewal">Auto Renewal</b>
              <b className="on">On</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Dashboard.propTypes = {
  className: PropTypes.string,
};

export default Dashboard;
