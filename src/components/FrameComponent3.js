import ItemFrame from "./ItemFrame";
import DeliveryItem from "./DeliveryItem";
import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={`top-brands-parent ${className}`}>
      <b className="top-brands">Top Brands</b>
      <div className="top-brands-items">
        <ItemFrame
          image="/image@2x.png"
          amazon="Amazon"
          amazonTheBiggestMarketPla="Amazon: The biggest market place on the internet for all your needs"
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
          image="/image-3@2x.png"
          amazon="Steam"
          amazonTheBiggestMarketPla="Steam is a video game digital distribution service and storefront developed by Valve Corporation."
          propWidth="133.6px"
          propDisplay="inline-block"
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
        />
        <DeliveryItem
          image9="/image-7@2x.png"
          instacart="Best Buy"
          instacartIsAnAmericanDeli="Best Buy is an American multinational consumer electronics retailer headquartered in Richfield, Minnesota."
          propHeight="66px"
          propDisplay="inline-block"
        />
        <ItemFrame
          image="/image-11@2x.png"
          amazon="Chipotle"
          amazonTheBiggestMarketPla="Order tacos, burritos, salads, bowls and more at Chipotle Mexican Grill."
          propWidth="unset"
          propDisplay="unset"
        />
      </div>
      <div className="page-actions">
        <button className="button4">
          <div className="button5">See all</div>
        </button>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
