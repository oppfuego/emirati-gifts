import PropTypes from "prop-types";
import "./HowItWorks.css";

const HowItWorks = ({ className = "" }) => {
  return (
    <section className={`how-it-works ${className}`}>
      <div className="explanation">
        <div className="description-container">
          <div className="instructions">
            <h1 className="how-it-works1">How it works</h1>
            <div className="buy-online-add">
              Buy online, add a personal greeting and deliver digitally or via
              post anywhere in the world.
            </div>
          </div>
          <button className="button10">
            <div className="button11">Read More</div>
          </button>
        </div>
      </div>
      <img
        className="undraw-happy-birthday-re-c16u-icon"
        loading="lazy"
        alt=""
        src="/undraw-happy-birthday-re-c16u2-1@2x.png"
      />
    </section>
  );
};

HowItWorks.propTypes = {
  className: PropTypes.string,
};

export default HowItWorks;
