import PropTypes from "prop-types";
import "./FooterBottom.css";

const FooterBottom = ({ className = "" }) => {
  return (
    <div className={`footer-bottom2 ${className}`}>
      <div className="footer-content1">
        <div className="logo4">
          <img className="mask-group-icon4" alt="" src="/mask-group@2x.png" />
          <div className="emiratigifts4">EmiratiGifts</div>
        </div>
        <div className="emiratigifts-is-a3">{`EmiratiGifts is a user-centric platform designer for YOU to Buy & Sell Giftcards, Crypto, Airtime and Utility Bills. You can pay or be paid in Bitcoins, USDT or Naira.`}</div>
        <div className="footer-support">
          <div className="live-chat-support3">
            Live Chat Support is available 24/7
          </div>
          <div className="group-div">
            <b className="helpemiratigiftscom-support3">
              Help@EmiratiGifts.com (Support)
            </b>
            <b className="adminemiratigiftscom-other3">
              Admin@EmiratiGifts.com (Other Enquiries)
            </b>
          </div>
        </div>
      </div>
      <div className="product-parent">
        <b className="product3">Product</b>
        <div className="product-list2">
          <div className="airtime-to-cash3">Airtime to cash</div>
          <div className="sell-bitcoin-in6">Sell Bitcoin in Nigeria</div>
          <div className="sell-bitcoin-in7">Sell Bitcoin in Ghana</div>
          <div className="tether-usdt-wallet3">Tether (USDT) Wallet</div>
          <div className="dogecoin-wallet3">Dogecoin Wallet</div>
          <div className="litecoin-wallet3">Litecoin Wallet</div>
          <div className="ethereum-wallet3">Ethereum Wallet</div>
          <div className="binance-wallet3">Binance Wallet</div>
          <div className="tron-wallet3">TRON Wallet</div>
          <div className="crypto-markets3">Crypto Markets</div>
          <div className="buy-airtime3">Buy Airtime</div>
        </div>
      </div>
      <div className="resources-group">
        <b className="resources4">Resources</b>
        <div className="resource-list2">
          <div className="blog3">Blog</div>
          <div className="support-us3">Support Us</div>
          <div className="contact-us8">Contact Us</div>
          <div className="developers3">Developers</div>
          <div className="career3">Career</div>
          <div className="promo-codes3">Promo Codes</div>
          <div className="gift-card-rates3">Gift Card Rates Calculator</div>
          <div className="highest-gift-card3">HIghest gift card Rates</div>
          <div className="check-gift-card3">Check Gift Card Balance</div>
          <div className="how-to-sell3">How to Sell Gift Cards</div>
          <div className="all-pages3">All Pages</div>
          <div className="terms-of-use3">Terms of Use</div>
          <div className="privacy-policy3">Privacy Policy</div>
        </div>
      </div>
      <div className="gift-cards-parent">
        <b className="gift-cards6">Gift Cards</b>
        <div className="gift-card-list2">
          <div className="sell-gift-card6">Sell Gift Card in Nigeria</div>
          <div className="sell-gift-card7">Sell Gift Card in Ghana</div>
          <div className="gift-card-to9">Gift Card to Bitcoin</div>
          <div className="gift-card-to10">Gift Card to Litecoin</div>
          <div className="gift-card-to11">Gift Card to USDT</div>
          <div className="buy-gift-cards3">Buy Gift Cards</div>
          <div className="amazon-gift-cards3">Amazon Gift Cards</div>
          <div className="amex-gift-cards3">AMEX Gift Cards</div>
          <div className="razer-gold-gift3">Razer Gold Gift Cards</div>
          <div className="apple-gift-cards3">Apple Gift Cards</div>
          <div className="ebay-gift-cards3">eBay Gift Cards</div>
          <div className="google-play-gift3">Google Play Gift Cards</div>
          <div className="nordstorm-gift-cards3">Nordstorm Gift Cards</div>
          <div className="steam-gift-cards3">Steam Gift Cards</div>
          <div className="sephora-gift-cards3">Sephora Gift Cards</div>
          <div className="xbox-gift-cards3">Xbox Gift Cards</div>
          <div className="nike-gift-cards3">Nike Gift Cards</div>
        </div>
      </div>
    </div>
  );
};

FooterBottom.propTypes = {
  className: PropTypes.string,
};

export default FooterBottom;
