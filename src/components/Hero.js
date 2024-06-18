import PropTypes from "prop-types";
import "./Hero.css";

const Hero = ({ className = "" }) => {
  return (
    <section className={`hero ${className}`}>
      <div className="hero-content">
        <h1 className="the-perfect-gift">
          The Perfect Gift for Those Who Can’t Choose
        </h1>
        <div className="the-all-in-one-gift">The all-in-one Gift Card</div>
      </div>
      <div className="gift-card">
        <div className="card-image">
          <img className="image-15-icon" alt="" src="/image-15@2x.png" />
          <div className="card-issuer">
            <b className="emirati-gifts">Emirati Gifts</b>
          </div>
          <div className="logo-container">
            <div className="logo4">
              <img
                className="mask-group-icon4"
                alt=""
                src="/mask-group@2x.png"
              />
              <div className="emiratigifts4">EmiratiGifts</div>
            </div>
            <button className="wrapper">
              <b className="b">$500</b>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
