import { Button } from "@mui/material";
import Header1 from "../components/Header1";
import CancellationContent from "../components/CancellationContent";
import "./CancellationPolicy.css";

const CancellationPolicy = () => {
  return (
    <div className="cancellation-policy">
      <Header1 />
      <section className="policy-intro">
        <b className="cancellation-policy1">Cancellation Policy</b>
        <div className="please-refer-to2">{`Please refer to our Terms and Conditions for further details regarding the use and redemption of the Shoes & Wallet Gift Card.`}</div>
      </section>
      <CancellationContent />
      <footer className="footer2">
        <div className="footer-top1">
          <div className="company">
            <div className="join-us1">
              <h1 className="join-700k-customers1">Join 700k+ Customers</h1>
              <div className="join-the-thousand1">
                Join the thousand of users worldwide using EmiratiGifts to carry
                out safe and secure digital transaction. We are ready to welcome
                you.
              </div>
            </div>
            <div className="button-container1">
              <Button
                className="button1"
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
          <div className="footer-divider1" />
        </div>
        <div className="footer-bottom1">
          <div className="company-info1">
            <div className="logo1">
              <img
                className="mask-group-icon1"
                alt=""
                src="/mask-group@2x.png"
              />
              <div className="emiratigifts1">EmiratiGifts</div>
            </div>
            <div className="emiratigifts-is-a1">{`EmiratiGifts is a user-centric platform designer for YOU to Buy & Sell Giftcards, Crypto, Airtime and Utility Bills. You can pay or be paid in Bitcoins, USDT or Naira.`}</div>
            <div className="support1">
              <div className="live-chat-support1">
                Live Chat Support is available 24/7
              </div>
              <div className="helpemiratigiftscom-support-group">
                <b className="helpemiratigiftscom-support1">
                  Help@EmiratiGifts.com (Support)
                </b>
                <b className="adminemiratigiftscom-other1">
                  Admin@EmiratiGifts.com (Other Enquiries)
                </b>
              </div>
            </div>
          </div>
          <div className="products1">
            <b className="product1">Product</b>
            <div className="product-list1">
              <div className="airtime-to-cash1">Airtime to cash</div>
              <div className="sell-bitcoin-in2">Sell Bitcoin in Nigeria</div>
              <div className="sell-bitcoin-in3">Sell Bitcoin in Ghana</div>
              <div className="tether-usdt-wallet1">Tether (USDT) Wallet</div>
              <div className="dogecoin-wallet1">Dogecoin Wallet</div>
              <div className="litecoin-wallet1">Litecoin Wallet</div>
              <div className="ethereum-wallet1">Ethereum Wallet</div>
              <div className="binance-wallet1">Binance Wallet</div>
              <div className="tron-wallet1">TRON Wallet</div>
              <div className="crypto-markets1">Crypto Markets</div>
              <div className="buy-airtime1">Buy Airtime</div>
            </div>
          </div>
          <div className="resources1">
            <b className="resources2">Resources</b>
            <div className="resource-list1">
              <div className="blog1">Blog</div>
              <div className="support-us1">Support Us</div>
              <div className="contact-us5">Contact Us</div>
              <div className="developers1">Developers</div>
              <div className="career1">Career</div>
              <div className="promo-codes1">Promo Codes</div>
              <div className="gift-card-rates1">Gift Card Rates Calculator</div>
              <div className="highest-gift-card1">HIghest gift card Rates</div>
              <div className="check-gift-card1">Check Gift Card Balance</div>
              <div className="how-to-sell1">How to Sell Gift Cards</div>
              <div className="all-pages1">All Pages</div>
              <div className="terms-of-use1">Terms of Use</div>
              <div className="privacy-policy1">Privacy Policy</div>
            </div>
          </div>
          <div className="gift-cards2">
            <b className="gift-cards3">Gift Cards</b>
            <div className="gift-card-list1">
              <div className="sell-gift-card2">Sell Gift Card in Nigeria</div>
              <div className="sell-gift-card3">Sell Gift Card in Ghana</div>
              <div className="gift-card-to3">Gift Card to Bitcoin</div>
              <div className="gift-card-to4">Gift Card to Litecoin</div>
              <div className="gift-card-to5">Gift Card to USDT</div>
              <div className="buy-gift-cards1">Buy Gift Cards</div>
              <div className="amazon-gift-cards1">Amazon Gift Cards</div>
              <div className="amex-gift-cards1">AMEX Gift Cards</div>
              <div className="razer-gold-gift1">Razer Gold Gift Cards</div>
              <div className="apple-gift-cards1">Apple Gift Cards</div>
              <div className="ebay-gift-cards1">eBay Gift Cards</div>
              <div className="google-play-gift1">Google Play Gift Cards</div>
              <div className="nordstorm-gift-cards1">Nordstorm Gift Cards</div>
              <div className="steam-gift-cards1">Steam Gift Cards</div>
              <div className="sephora-gift-cards1">Sephora Gift Cards</div>
              <div className="xbox-gift-cards1">Xbox Gift Cards</div>
              <div className="nike-gift-cards1">Nike Gift Cards</div>
            </div>
          </div>
        </div>
        <div className="bottom-divider1">
          <div className="bottom-divider-item" />
        </div>
        <div className="copyright-social2">
          <div className="copyright2">
            <div className="giftsite-all-rights2">
              2024 Giftsite. All Rights Reserved.
            </div>
          </div>
          <div className="social-icons">
            <img
              className="paypal-icon2"
              loading="lazy"
              alt=""
              src="/paypal.svg"
            />
            <img
              className="dash-dash-icon2"
              loading="lazy"
              alt=""
              src="/dashdash.svg"
            />
            <img
              className="blogger-icon2"
              loading="lazy"
              alt=""
              src="/blogger.svg"
            />
            <img
              className="instagram-icon2"
              loading="lazy"
              alt=""
              src="/instagram.svg"
            />
            <img
              className="facebook-icon2"
              loading="lazy"
              alt=""
              src="/facebook.svg"
            />
            <input className="youtube2" type="checkbox" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CancellationPolicy;
