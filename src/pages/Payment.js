import { Button } from "@mui/material";
import Header2 from "../components/Header2";
import HeroContent from "../components/HeroContent";
import ContactForm from "../components/ContactForm";
import "./Payment.css";

const Payment = () => {
  return (
    <div className="payment-1920">
      <Header2 />
      <section className="content1">
        <div className="hero">
          <HeroContent />
        </div>
        <div className="rectangle-parent">
          <div className="frame-item" />
          <ContactForm />
        </div>
      </section>
      <section className="footer3">
        <div className="footer-content">
          <div className="footer-columns1">
            <div className="join-700k-customers-parent">
              <h1 className="join-700k-customers2">Join 700k+ Customers</h1>
              <div className="join-the-thousand2">
                Join the thousand of users worldwide using EmiratiGifts to carry
                out safe and secure digital transaction. We are ready to welcome
                you.
              </div>
            </div>
            <div className="newsletter">
              <Button
                className="button2"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "#000",
                  border: "#000 solid 0.5px",
                  borderRadius: "100px",
                  "&:hover": { background: "#000" },
                  height: 46,
                }}
              >
                Sign up for Free
              </Button>
            </div>
          </div>
          <div className="footer-divider2" />
        </div>
        <footer className="company-info2">
          <div className="company-details">
            <div className="logo2">
              <img
                className="mask-group-icon2"
                alt=""
                src="/mask-group@2x.png"
              />
              <div className="emiratigifts2">EmiratiGifts</div>
            </div>
            <div className="emiratigifts-is-a2">{`EmiratiGifts is a user-centric platform designer for YOU to Buy & Sell Giftcards, Crypto, Airtime and Utility Bills. You can pay or be paid in Bitcoins, USDT or Naira.`}</div>
            <div className="support-info">
              <div className="live-chat-support2">
                Live Chat Support is available 24/7
              </div>
              <div className="helpemiratigiftscom-support-container">
                <b className="helpemiratigiftscom-support2">
                  Help@EmiratiGifts.com (Support)
                </b>
                <b className="adminemiratigiftscom-other2">
                  Admin@EmiratiGifts.com (Other Enquiries)
                </b>
              </div>
            </div>
          </div>
          <div className="product-links">
            <b className="product2">Product</b>
            <div className="product-options">
              <div className="airtime-to-cash2">Airtime to cash</div>
              <div className="sell-bitcoin-in4">Sell Bitcoin in Nigeria</div>
              <div className="sell-bitcoin-in5">Sell Bitcoin in Ghana</div>
              <div className="tether-usdt-wallet2">Tether (USDT) Wallet</div>
              <div className="dogecoin-wallet2">Dogecoin Wallet</div>
              <div className="litecoin-wallet2">Litecoin Wallet</div>
              <div className="ethereum-wallet2">Ethereum Wallet</div>
              <div className="binance-wallet2">Binance Wallet</div>
              <div className="tron-wallet2">TRON Wallet</div>
              <div className="crypto-markets2">Crypto Markets</div>
              <div className="buy-airtime2">Buy Airtime</div>
            </div>
          </div>
          <div className="resource-links">
            <b className="resources3">Resources</b>
            <div className="resource-options">
              <div className="blog2">Blog</div>
              <div className="support-us2">Support Us</div>
              <div className="contact-us6">Contact Us</div>
              <div className="developers2">Developers</div>
              <div className="career2">Career</div>
              <div className="promo-codes2">Promo Codes</div>
              <div className="gift-card-rates2">Gift Card Rates Calculator</div>
              <div className="highest-gift-card2">HIghest gift card Rates</div>
              <div className="check-gift-card2">Check Gift Card Balance</div>
              <div className="how-to-sell2">How to Sell Gift Cards</div>
              <div className="all-pages2">All Pages</div>
              <div className="terms-of-use2">Terms of Use</div>
              <div className="privacy-policy2">Privacy Policy</div>
            </div>
          </div>
          <div className="gift-card-links">
            <b className="gift-cards4">Gift Cards</b>
            <div className="gift-card-options">
              <div className="sell-gift-card4">Sell Gift Card in Nigeria</div>
              <div className="sell-gift-card5">Sell Gift Card in Ghana</div>
              <div className="gift-card-to6">Gift Card to Bitcoin</div>
              <div className="gift-card-to7">Gift Card to Litecoin</div>
              <div className="gift-card-to8">Gift Card to USDT</div>
              <div className="buy-gift-cards2">Buy Gift Cards</div>
              <div className="amazon-gift-cards2">Amazon Gift Cards</div>
              <div className="amex-gift-cards2">AMEX Gift Cards</div>
              <div className="razer-gold-gift2">Razer Gold Gift Cards</div>
              <div className="apple-gift-cards2">Apple Gift Cards</div>
              <div className="ebay-gift-cards2">eBay Gift Cards</div>
              <div className="google-play-gift2">Google Play Gift Cards</div>
              <div className="nordstorm-gift-cards2">Nordstorm Gift Cards</div>
              <div className="steam-gift-cards2">Steam Gift Cards</div>
              <div className="sephora-gift-cards2">Sephora Gift Cards</div>
              <div className="xbox-gift-cards2">Xbox Gift Cards</div>
              <div className="nike-gift-cards2">Nike Gift Cards</div>
            </div>
          </div>
        </footer>
        <div className="footer-child">
          <div className="frame-inner" />
        </div>
        <div className="copyright-details">
          <div className="rights">
            <div className="giftsite-all-rights3">
              2024 Giftsite. All Rights Reserved.
            </div>
          </div>
          <div className="social-links">
            <img
              className="paypal-icon3"
              loading="lazy"
              alt=""
              src="/paypal.svg"
            />
            <img
              className="dash-dash-icon3"
              loading="lazy"
              alt=""
              src="/dashdash.svg"
            />
            <img
              className="blogger-icon3"
              loading="lazy"
              alt=""
              src="/blogger.svg"
            />
            <img
              className="instagram-icon3"
              loading="lazy"
              alt=""
              src="/instagram.svg"
            />
            <img
              className="facebook-icon3"
              loading="lazy"
              alt=""
              src="/facebook.svg"
            />
            <input className="youtube3" type="checkbox" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payment;
