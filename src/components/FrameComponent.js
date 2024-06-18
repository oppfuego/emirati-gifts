import ItemFrame from "./ItemFrame";
import DeliveryItem from "./DeliveryItem";
import FrameComponent2 from "./FrameComponent2";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={`most-popular-brands-group ${className}`}>
      <h1 className="most-popular-brands1">Most Popular Brands</h1>
      <div className="item-frame-group">
        <ItemFrame
          image="/image-81@2x.png"
          amazon="Amazon"
          amazonTheBiggestMarketPla="Amazon: The biggest market place on the internet for all your needs"
          propWidth="unset"
          propDisplay="unset"
        />
        <ItemFrame
          image="/image-91@2x.png"
          amazon="PlayStation"
          amazonTheBiggestMarketPla="PlayStation: One of the biggest gaming platforms in the gaming industry"
          propWidth="unset"
          propDisplay="unset"
        />
        <ItemFrame
          image="/image-10@2x.png"
          amazon="Roblox"
          amazonTheBiggestMarketPla="Roblox is the ultimate virtual universe that lets you create, share experiences with friends."
          propWidth="133.6px"
          propDisplay="inline-block"
        />
        <ItemFrame
          image="/image-111@2x.png"
          amazon="Steam"
          amazonTheBiggestMarketPla="Steam is a video game digital distribution service and storefront developed by Valve Corporation."
          propWidth="133.6px"
          propDisplay="inline-block"
        />
        <ItemFrame
          image="/image-8-2@2x.png"
          amazon="Spotify"
          amazonTheBiggestMarketPla="Spotify is a digital music service that gives you access to millions of songs."
          propWidth="133.6px"
          propDisplay="inline-block"
        />
        <DeliveryItem
          image9="/image-9-2@2x.png"
          instacart="instacart"
          instacartIsAnAmericanDeli="Instacart is an American delivery company based in San  Francisco that operates a grocery delivery and pick-up service."
          propHeight="unset"
          propDisplay="unset"
        />
        <FrameComponent2 image7="/image-7-2@2x.png" />
        <ItemFrame
          image="/image-11-2@2x.png"
          amazon="Chipotle"
          amazonTheBiggestMarketPla="Order tacos, burritos, salads, bowls and more at Chipotle Mexican Grill."
          propWidth="unset"
          propDisplay="unset"
        />
      </div>
      <div className="button-container">
        <button className="button12">
          <div className="button13">See all</div>
        </button>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
