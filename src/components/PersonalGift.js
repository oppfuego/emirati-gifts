import PropTypes from "prop-types";
import "./PersonalGift.css";

const PersonalGift = ({ className = "" }) => {
  return (
    <section className={`personal-gift ${className}`}>
      <h1 className="the-easy-and">
        The easy and fun way to give a personal gift
      </h1>
      <div className="gift-benefits">
        <div className="benefit-list">
          <img
            className="lager-2-icon"
            loading="lazy"
            alt=""
            src="/lager-2.svg"
          />
          <div className="choose-from-over">
            Choose from over 10,000+ brands
          </div>
        </div>
        <div className="benefit-list1">
          <img className="lager-2-icon1" alt="" src="/lager-2-1.svg" />
          <div className="personalize-with-a">
            Personalize with a video, image or text
          </div>
        </div>
        <div className="benefit-list2">
          <img className="lager-2-icon2" alt="" src="/lager-2-2.svg" />
          <div className="deliver-via-post">
            Deliver via post, email or social media
          </div>
        </div>
        <div className="benefit-list3">
          <img className="lager-2-icon3" alt="" src="/lager-2-3.svg" />
          <div className="unhappy-swap-gift">
            Unhappy? Swap Gift Card against another
          </div>
        </div>
      </div>
    </section>
  );
};

PersonalGift.propTypes = {
  className: PropTypes.string,
};

export default PersonalGift;
