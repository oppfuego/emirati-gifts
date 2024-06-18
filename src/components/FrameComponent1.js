import DeliveryItem from "./DeliveryItem";
import ItemFrame from "./ItemFrame";
import FrameComponent2 from "./FrameComponent2";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={`most-popular-brands-parent ${className}`}>
      <h1 className="most-popular-brands">Most Popular Brands</h1>
      <div className="item-frame-parent">
        <DeliveryItem
          image9="/image-4@2x.png"
          instacart="Nintendo"
          instacartIsAnAmericanDeli="Japanese multinational video game company headquartered in Kyoto. It develops, publishes and releases both video games"
          propHeight="unset"
          propDisplay="unset"
        />
        <ItemFrame
          image="/image-1@2x.png"
          amazon="PlayStation"
          amazonTheBiggestMarketPla="PlayStation: One of the biggest gaming platforms in the gaming industry"
          propWidth="unset"
          propDisplay="unset"
        />
        <ItemFrame
          image="/image-2@2x.png"
          amazon="Roblox"
          amazonTheBiggestMarketPla="Roblox is the ultimate virtual universe that lets you create, share experiences with friends."
          propWidth="133.6px"
          propDisplay="inline-block"
        />
        <ItemFrame
          image="/image-71@2x.png"
          amazon="Playstore"
          amazonTheBiggestMarketPla="A digital distribution service operated and developed by Google."
          propWidth="unset"
          propDisplay="unset"
        />
        <ItemFrame
          image="/image-8@2x.png"
          amazon="Spotify"
          amazonTheBiggestMarketPla="Spotify is a digital music service that gives you access to millions of songs."
          propWidth="133.6px"
          propDisplay="inline-block"
        />
        <DeliveryItem
          image9="/image-9@2x.png"
          instacart="instacart"
          instacartIsAnAmericanDeli="Instacart is an American delivery company based in San  Francisco that operates a grocery delivery and pick-up service."
          propHeight="unset"
          propDisplay="unset"
        />
        <FrameComponent2 image7="/image-7@2x.png" />
        <ItemFrame
          image="/image-11@2x.png"
          amazon="Chipotle"
          amazonTheBiggestMarketPla="Order tacos, burritos, salads, bowls and more at Chipotle Mexican Grill."
          propWidth="unset"
          propDisplay="unset"
        />
      </div>
      <div className="button-wrapper">
        <button className="button8">
          <div className="button9">See all</div>
        </button>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
